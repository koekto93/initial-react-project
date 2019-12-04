import React from 'react';
import PropTypes from 'prop-types';
import Pager from './Pager';
import { connect } from 'react-redux';

import { getPagerSettings } from '../../../selectors/recruitment';
import { setNewSelectedPageValue } from '../../../actions/recruitmentActions';

const CustomPagination = ({
	pagerSettings: { selectedPage, totalPages },
	setNewSelectedPageValue,
}) => {
	const onHandleChange = newPage => setNewSelectedPageValue(newPage);

	if (totalPages <= 1) return null;

	return (
		<div className="c-custom-pagination">
			<Pager
				totalPages={totalPages}
				page={selectedPage}
				onChange={onHandleChange}
				leftVisible={1}
				middleVisible={5}
				rightVisible={1}
				previousButtonTitle="Назад"
				nextButtonTitle="Вперед"
				//pageComponent={pageComponent}
			/>
		</div>
	);
};

CustomPagination.propTypes = {
	//redux
	pagerSettings: PropTypes.shape({
		selectedPage: PropTypes.number,
		totalPages: PropTypes.number,
	}),

	//actions
	setNewSelectedPageValue: PropTypes.func,
};

const mapStateToProps = state => ({
	pagerSettings: getPagerSettings(state),
});

export default connect(
	mapStateToProps,
	{ setNewSelectedPageValue }
)(CustomPagination);
