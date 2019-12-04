import { notification } from 'antd';

export function openNotifierPopup({ options: { type, ...anotherOptions } }) {
	notification[type]({
		...anotherOptions,
		duration: 3,
	});
}
