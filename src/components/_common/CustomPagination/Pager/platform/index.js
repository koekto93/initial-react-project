/* eslint-disable no-mixed-operators */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Page from '../../PagerPage';
import DefaultPageComponent from '../../DefaultPageComponent';

import './Pager.scss';

export default class Pager extends React.PureComponent {
	static propTypes = {
		totalPages: PropTypes.number,
		page: PropTypes.number,
		onChange: PropTypes.func,
		leftVisible: PropTypes.number,
		middleVisible: PropTypes.number,
		rightVisible: PropTypes.number,
		maxPages: PropTypes.number,
		className: PropTypes.string,
		style: PropTypes.object,
		previousButtonTitle: PropTypes.string,
		nextButtonTitle: PropTypes.string,
		pageComponent: PropTypes.any,
	};

	getPages = (start, count) =>
		count > 0 ? [...Array(count)].map(this.mapping(start, this.props)) : [];

	mapping = (start, props) => (value, index) => {
		const { page, pageComponent: PageComponent = DefaultPageComponent } = props;
		const current = start + index;

		return (
			<PageComponent
				key={`page-left-${current}`}
				name={current}
				title={`${current}`}
				active={page === current}
				onClick={e => {
					this.handlePageChange(e, current);
				}}
				Component={Page}
				className="pageBtn"
			/>
		);
	};

	handlePageChange = (event, newPage) => {
		event.preventDefault();
		const { page, totalPages, onChange } = this.props;
		if (page === newPage || newPage < 1 || newPage > totalPages) return;
		onChange(newPage);
	};
	renderSeparator = (type, newPage) => {
		const { pageComponent: PageComponent = DefaultPageComponent } = this.props;
		const className = type === 'empty' ? 'separator' : 'pageBtn';
		const title = type !== 'empty' ? '...' : '';
		// $FlowFixMe
		const separatorClickHandler =
			newPage && type !== 'empty' ? e => this.handlePageChange(e, newPage) : null;
		return (
			<PageComponent
				name="separator"
				title={title}
				onClick={separatorClickHandler}
				Component={Page}
				className={className}
			/>
		);
	};
	renderPages = () => {
		const {
			totalPages,
			page,
			leftVisible = 1,
			middleVisible = 13,
			rightVisible = 1,
			maxPages = 15,
		} = this.props;
		const leftPagesCount = Math.min(totalPages, leftVisible);
		const rightPagesCount = Math.min(totalPages - leftPagesCount, rightVisible);
		let middlePagesCount = Math.min(totalPages - leftVisible - rightVisible, middleVisible);

		const middleRange = {
			start: leftPagesCount + 1,
			end: totalPages - rightPagesCount,
		};
		let startMiddlePage = 0;
		if (middleRange.start <= middleRange.end) {
			const halfMiddleCountFloor = Math.floor(middlePagesCount / 2);
			const halfMiddleCountCeil = Math.ceil(middlePagesCount / 2);
			if (
				middleRange.start + halfMiddleCountFloor <= page &&
				page <= middleRange.end - halfMiddleCountCeil
			) {
				startMiddlePage = page - halfMiddleCountFloor;
			} else if (page > middleRange.end - halfMiddleCountCeil) {
				startMiddlePage = middleRange.end - middlePagesCount + 1;
			} else {
				startMiddlePage = middleRange.start;
			}
		}
		const startRightPage = totalPages - rightPagesCount + 1;
		let endMiddlePage = startMiddlePage + middlePagesCount - 1;
		const renderLeftEllipsisSeparator = leftPagesCount + 1 !== startMiddlePage;
		const renderRightEllipsisSeparator = startRightPage - 1 !== endMiddlePage;
		if (renderLeftEllipsisSeparator) {
			middlePagesCount -= 1;
			startMiddlePage += 1;
		}
		if (renderRightEllipsisSeparator) {
			middlePagesCount -= 1;
			endMiddlePage -= 1;
		}
		if (totalPages >= maxPages) {
			return (
				<Fragment>
					{this.getPages(1, leftPagesCount)}
					{renderLeftEllipsisSeparator
						? this.renderSeparator('pageBtn', startMiddlePage - 1)
						: null}
					{this.getPages(startMiddlePage, middlePagesCount)}
					{renderRightEllipsisSeparator
						? this.renderSeparator('pageBtn', endMiddlePage + 1)
						: null}
					{this.getPages(startRightPage, rightPagesCount)}
				</Fragment>
			);
		}
		return (
			<Fragment>
				{this.renderSeparator('empty')}
				{this.getPages(1, totalPages)}
				{this.renderSeparator('empty')}
			</Fragment>
		);
	};

	render() {
		const {
			totalPages,
			page,
			//className,
			style,
			previousButtonTitle = '<',
			nextButtonTitle = '>',
			pageComponent: PageComponent = DefaultPageComponent,
		} = this.props;

		const isFirstPage = page === 1;
		const isLastPage = page === totalPages;
		return (
			<div
				className="lm-lego-DataGrid__Pager"
				/* className={classNames('lm-lego-DataGrid__Pager', className)} */ style={style}
			>
				<div className="lm-lego-DataGrid__Pager__container">
					<ul className="lm-lego-DataGrid__Pager__block left">
						<PageComponent
							name="previous"
							title={previousButtonTitle}
							disabled={isFirstPage}
							onClick={e => {
								this.handlePageChange(e, page - 1);
							}}
							Component={Page}
						/>
					</ul>
					<ul className="lm-lego-DataGrid__Pager__block middle">{this.renderPages()}</ul>
					<ul className="lm-lego-DataGrid__Pager__block right">
						<PageComponent
							name="next"
							title={nextButtonTitle}
							disabled={isLastPage}
							onClick={e => {
								this.handlePageChange(e, page + 1);
							}}
							Component={Page}
						/>
					</ul>
				</div>
			</div>
		);
	}
}
