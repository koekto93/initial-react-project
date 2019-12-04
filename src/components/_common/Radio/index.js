import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@lmui/components/Icon';
import Text from '@lmui/components/Text';

import './style.scss';

const Radio = ({ checked, text, onChange, value, name, disabled }) => (
	<div className="l-radio">
		<label className="c-radio option">
			<input
				className="c-radio__input"
				type="radio"
				name={name}
				value={value}
				onChange={onChange}
				disabled={disabled}
			/>
			<Icon
				color={disabled ? 'mute20' : 'primary'}
				size={'ic2'}
				name={checked ? 'radioOn' : 'radioOff'}
				styleSet={['c-radio__box']}
			></Icon>
			<Text block color="mainText" size="fs1">
				{text}
			</Text>
		</label>
	</div>
);

Radio.propTypes = {
	checked: PropTypes.bool,
	text: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	name: PropTypes.string,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
};

Radio.defaultProps = {
	checked: false,
	text: '',
	value: '',
	name: '',
	disabled: false,
	onChange: () => {},
};

export default Radio;
