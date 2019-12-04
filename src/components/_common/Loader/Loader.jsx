import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {block} from 'bem-cn';

import {Spin} from 'antd';

import './Loader.scss';

const cn = block('loader');

export default class Loader extends Component {
    static propTypes = {
        show: PropTypes.bool,
        size: PropTypes.string,
        global: PropTypes.bool
    };

    static defaultProps = {
        size: 'large',
        global: false
    };

    render() {
        const {show, size, global} = this.props;
        return (
            <div className={cn({global, show})}>
                <Spin size={size}/>
            </div>
        )
    }
}