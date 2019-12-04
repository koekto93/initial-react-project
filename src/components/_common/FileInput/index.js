import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { Text, View, Button } from '@lmui/components';
import PreviewItem from './PreviewItem';
import { block } from 'bem-cn';

//---remove
import { setOpenModalName } from '../../../redux/modules/modal';
import CustomerInformation from '../../ModalPopupContent/contents/CustomerInformation';

//---
import './style.scss';

const b = block('file-upload');
//const imageMaxSize = 1000000000; // bytes
const acceptedFileImageTypes = 'image/png, image/jpg, image/jpeg';
const acceptedFileImageTypesArray = acceptedFileImageTypes.split(',').map(item => item.trim());
const acceptedFileTypes = `${acceptedFileImageTypes}, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/msword, application/pdf, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, application/vnd.ms-powerpoint`;
const acceptedFileTypesArray = acceptedFileTypes.split(',').map(item => item.trim());

/* 
	MIME list https://stackoverflow.com/questions/4212861/what-is-a-correct-mime-type-for-docx-pptx-etc
*/

const FileInput = ({ onChange, value, setOpenModalName }) => {
	const accumFiles = [];
	const [isTypesError, setTypesError] = useState(false);
	const [timerId, setTimerId] = useState(null);

	const onRemoveFile = fileName => {
		onChange([...value.filter(({ file }) => file.name !== fileName)]);
	};

	const verifyFile = file => {
		if (timerId) {
			clearTimeout(timerId);
			setTimerId(null);
		}

		const fileType = file.type;
		/*
			Проверка на размер файла 
			const currentFileSize = currentFile.size;
			 if (currentFileSize > imageMaxSize) {
				alert('This file is not allowed. ' + currentFileSize + ' bytes is too large');
				return false;
			} */
		if (!acceptedFileTypesArray.includes(fileType)) {
			setTypesError(true);
			//через время таймера маргание текста закончится
			setTimerId(setTimeout(() => setTypesError(false), 4000));
			return false;
		}
		return true;
	};

	const loadFile = file => {
		const isVerified = verifyFile(file);
		if (isVerified) {
			const myFileItemReader = new FileReader();
			myFileItemReader.readAsDataURL(file);

			return new Promise(resolve => {
				myFileItemReader.addEventListener(
					'load',
					async () => {
						let readingResult = null;
						if (acceptedFileImageTypesArray.includes(file.type)) {
							readingResult = myFileItemReader.result;
						}
						accumFiles.push({ src: readingResult, file: file });
						resolve();
					},
					false
				);
			});
		}
	};

	const handleOnDrop = async (files, rejectedFiles) => {
		if (rejectedFiles && rejectedFiles.length > 0) {
			rejectedFiles.forEach(rejectedFile => verifyFile(rejectedFile));
		}

		//--- remove
		setOpenModalName({
			modalName: 'customerInformation',
			content: <CustomerInformation />,
		});
		//---
		if (files && files.length > 0) {
			const promises = files.map(loadFile);
			await Promise.all(promises);
			onChange([...value, ...accumFiles]);
		}
	};

	const getDropZoneContent = () => {
		return isDragActive ? (
			<Text color="primary" size="fs2" bold={true}>
				Перекиньте файл сюда
			</Text>
		) : (
			<React.Fragment>
				<Button type="fill-primary" title="Загрузить файл" textColor="main" />
				<Text
					color="mainText"
					size="fs2"
					ml="gap5"
					styleSet={[`${b('types')}`, `${b('types', { error: isTypesError })}`]}
				>
					Принимаем: jpg, png, pdf, doc, xls, ppt
				</Text>
			</React.Fragment>
		);
	};

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: acceptedFileTypes,
		onDrop: handleOnDrop,
		//multiple: false,
	});

	return (
		<View row>
			<View col>
				<View row>
					<View col>
						<div className="dropzone-previews">
							{value.map((fileOptions, index) => (
								<PreviewItem
									key={index}
									fileOptions={fileOptions}
									onRemoveFile={onRemoveFile}
								/>
							))}
						</div>
					</View>
				</View>
				<View row>
					<View col>
						<div
							{...getRootProps()}
							className={`${b('control')} ${b('control', { active: isDragActive })}`}
						>
							<input {...getInputProps()} />
							{getDropZoneContent()}
						</div>
					</View>
				</View>
			</View>
		</View>
	);
};

FileInput.propTypes = {
	onChange: PropTypes.func,
	value: PropTypes.array,
};

export default connect(null, { setOpenModalName })(FileInput);
