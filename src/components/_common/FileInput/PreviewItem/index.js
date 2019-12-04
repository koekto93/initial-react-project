import React from 'react';
import PropTypes from 'prop-types';
import { View, Icon, Text, Button } from '@lmui/components';
import { block } from 'bem-cn';

import './style.scss';

const preview = block('dz-preview');
const image = block('dz-image');
const details = block('dz-details');
const closeButton = block('dz-close-button');

const PreviewItem = ({ fileOptions: { file, src }, onRemoveFile }) => {
	const handleRemoveFile = e => {
		e.preventDefault();
		onRemoveFile(file.name);
	};
	return (
		<View row mr="gap7">
			<View col>
				<div
					className={` ${preview()} ${preview({
						type: src ? 'image' : 'file',
					})}`}
				>
					<div className={`${image()}-wrapper`}>
						<div className={`${image()}`}>
							{src ? (
								<img alt={file.name} src={src} />
							) : (
								<Icon color="grey50" size="ic4" name="doc" />
							)}
						</div>
						<div className={closeButton()}>
							<Button
								iconLeft="delete"
								type="text-primary"
								textColor="grey70"
								onPress={handleRemoveFile}
							/>
						</div>
					</div>
					<div className={details()}>
						<div className={details('filename')}>
							<Text color="mainText" size="fs0" block mt="gap2">
								{file.name}
							</Text>
						</div>
					</div>
				</div>
			</View>
		</View>
	);
};

PreviewItem.propTypes = {
	fileOptions: PropTypes.shape({
		src: PropTypes.string,
		file: PropTypes.object,
	}),
	onRemoveFile: PropTypes.func,

	//redux
};

export default PreviewItem;
