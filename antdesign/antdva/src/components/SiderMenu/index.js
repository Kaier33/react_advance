import React, { Component } from 'react'
import SiderMenu from './SiderMenu'
import { Drawer } from 'antd';

export default class SiderMenuWrapper extends Component {
    render() {
        const { collapsed, isMobile, onClose } = this.props;
        return (
            isMobile ? (
                <Drawer
                    placement="left"
                    closable={false}
                    onClose={onClose}
                    visible={!collapsed}
                    style={{ padding: 0 }}
                >
                    <SiderMenu {...this.props} />
                </Drawer>

            ) : (
                    <SiderMenu {...this.props} />
                )
        )
    }
}
