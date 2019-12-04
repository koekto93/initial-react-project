import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@lmui/components/Icon';
import Text from '@lmui/components/Text';

import './style.scss';

const Checkbox = ({ checked, text, onChange, value, name, disabled }) => (
	<div className="l-checkbox">
		<label className="c-checkbox option">
			<input
				className="c-checkbox__input"
				type="checkbox"
				name={name}
				value={value}
				onChange={onChange}
				disabled={disabled}
			/>
			<Icon
				color={disabled ? 'mute20' : 'primary'}
				size={'ic2'}
				name={checked ? 'checked' : 'unchecked'}
				styleSet={['c-checkbox__box']}
			></Icon>
			<Text color="mainText" size="fs1">
				{text}
			</Text>
		</label>
	</div>
);

Checkbox.propTypes = {
	checked: PropTypes.bool,
	text: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	name: PropTypes.string,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
};

Checkbox.defaultProps = {
	checked: false,
	text: '',
	value: '',
	name: '',
	disabled: false,
	onChange: () => {},
};

export default Checkbox;
