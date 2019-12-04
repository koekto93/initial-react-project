import React from 'react';
import PropTypes from 'prop-types';

export default class Link extends React.PureComponent {
	static propTypes = {
		title: PropTypes.string,
		className: PropTypes.string,
		onClick: PropTypes.func,
	};
	render() {
		const { title, className, onClick } = this.props;

		if (!onClick) return null;
		return (
			<a role="link" tabIndex={-1} className={className} onClick={onClick}>
				{title}
			</a>
		);
	}
}
