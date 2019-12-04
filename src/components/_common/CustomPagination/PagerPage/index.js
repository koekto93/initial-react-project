import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../PagerLink';

export default class Page extends React.PureComponent {
	static propTypes = {
		name: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		title: PropTypes.string,
		active: PropTypes.bool,
		disabled: PropTypes.bool,
		onClick: PropTypes.func,
		className: PropTypes.string,
	};

	render() {
		const { name, title, active, disabled, onClick, className, ...restProps } = this.props;
		const linkClassName = onClick
			? 'lm-lego-DataGrid__Pager__link pointer'
			: 'lm-lego-DataGrid__Pager__link';
		return (
			<li
				className={classNames(
					'lm-lego-DataGrid__Pager__item',
					{ active, disabled },
					className
				)}
				{...restProps}
			>
				<Link title={title} className={linkClassName} onClick={onClick} />
			</li>
		);
	}
}
