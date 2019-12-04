const module = 'modal';

export const SET_OPEN_MODAL_NAME = `${module}/SET_OPEN_MODAL_NAME`;
export const SET_LOADING_STATUS_ON = `${module}/SET_LOADING_STATUS_ON`;
export const SET_LOADING_STATUS_OFF = `${module}/SET_LOADING_STATUS_OFF`;
export const SEND_CONTRACT = `${module}/SEND_CONTRACT`;
export const REQUEST_PRICES = `${module}/REQUEST_PRICES`;
export const ARCHIVE_REQUEST = `${module}/ARCHIVE_REQUEST`;
export const REFUSE_SERVICE_CONTRACTOR = `${module}/REFUSE_SERVICE_CONTRACTOR`;

const initialState = {
	openModalName: '',
	isLoading: false,
};

export default function reducer(modalState = initialState, action = {}) {
	const { type, payload } = action;
	switch (type) {
		case SET_OPEN_MODAL_NAME:
			return {
				...modalState,
				openModalName: payload.modalName,
			};
		case SET_LOADING_STATUS_ON:
			return {
				...modalState,
				isLoading: payload,
			};
		case SET_LOADING_STATUS_OFF:
			return {
				...modalState,
				isLoading: payload,
			};
		default:
			return modalState;
	}
}

export const setOpenModalName = modalOptions => ({
	type: SET_OPEN_MODAL_NAME,
	payload: modalOptions,
});

export const setLoadingStatusOn = () => ({
	type: SET_LOADING_STATUS_ON,
	payload: true,
});

export const setLoadingStatusOff = () => ({
	type: SET_LOADING_STATUS_OFF,
	payload: false,
});
