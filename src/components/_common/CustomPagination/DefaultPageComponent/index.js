/* eslint-disable no-mixed-operators */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class DefaultPageComponent extends PureComponent {
	static propTypes = {
		Component: PropTypes.any,
	};

	render() {
		const { Component, ...restProps } = this.props;
		return <Component {...restProps} />;
	}
}
