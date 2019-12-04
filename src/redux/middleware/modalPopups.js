import React from 'react';
import { all, takeEvery, call, put, select } from 'redux-saga/effects';
import { get } from 'lodash';

function* makeRequestInModal({ api, ...rest }) {
	let response = null;
	try {
		yield put({ type: REFUSE_RECRUITMENT_CATEGORY + PENDING });
		yield put(setLoadingStatusOn());
		response = yield call(api, rest);
		yield put(setLoadingStatusOff());
		yield put({ type: REFUSE_RECRUITMENT_CATEGORY + SUCCESS });
		yield put(resetRecruitmentStore(['currentRecruitmentCategory', 'selectedPage']));
	} catch (error) {
		yield put({ type: REFUSE_RECRUITMENT_CATEGORY + FAILED });
		response = error;
		yield put(setLoadingStatusOff());
		yield put(
			setOpenModalName({
				modalName: 'infoModal',
				infoModalOptions: {
					contentType: 'TRY_AGAIN',
					errorId: CANT_REFUSE_SERVICE_CONTRACTOR,
					error,
				},
			})
		);
	}
	return response;
}

export default function* watcherModalPopups() {
	yield all([
		takeEvery(SET_OPEN_MODAL_NAME, function*({ payload }) {
			yield handleModalOpen(payload);
		}),
	]);
}

// SAGA WORKERS

function* workerRefuseServiceContractor({ payload }) {
	const profileId = yield select(getCurrentRecruitmentListItemId);
	const { categoryId } = yield select(getCurrentRecruitmentCategoryParams);

	yield put({ type: REFUSE_RECRUITMENT_CATEGORY + PENDING });

	const badConditionLMReason = payload.reasonsToRefuse.includes('BAD_CONDITIONS_LM')
		? payload['BAD_CONDITIONS_LM']
		: '';
	const anotherReason = payload.reasonsToRefuse.includes('ANOTHER') ? payload['ANOTHER'] : '';

	const preparedParams = {
		reasonsToRefuse: payload.reasonsToRefuse.filter(item => item !== 'ANOTHER'),
		anotherReasonToRefuse:
			badConditionLMReason || anotherReason ? `${badConditionLMReason} ${anotherReason}` : '',
		categoryId,
		profileId,
	};

	const response = yield call(makeRequestInModal, {
		api: apiRefuseOfCategory,
		modalName: '',
		...preparedParams,
	});

	if (typeof get(response, ['data', 'id']) !== 'undefined') {
		const { id, categories } = response.data;
		yield put(
			setOpenModalName({
				modalName: 'refuseServiceContractorSuccess',
				content: <TextContent text="Подрядчику отказано по услуге" />,
			})
		);
		yield put(updateRecruitmentListItem(id, categories));
	} else {
		//console.error('Ошибка при получении данных с сервера');
	}
}

// MIDDLEWARES

export const workWithOpenModal = store => next => action => {
	let { type } = action;
	if (type === SET_OPEN_MODAL_NAME) {
		const previosModalName = getOpenModalName(store.getState());
		if (previosModalName) {
			closeModalById(previosModalName);
		}
	}
	next(action);
};
