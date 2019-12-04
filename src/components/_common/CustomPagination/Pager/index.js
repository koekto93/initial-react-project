import React, { PureComponent } from 'react';
import PlatformPager from './platform/index';

export default class Pager extends PureComponent {
	render() {
		return <PlatformPager {...this.props} />;
	}
}
