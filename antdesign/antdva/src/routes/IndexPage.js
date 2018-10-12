import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';

import SiderMenu from '../components/SiderMenu';

import { enquireScreen, unenquireScreen } from 'enquire-js';

import { Layout, Icon } from 'antd';
const { Header, Content } = Layout;


let isMobile;
enquireScreen(b => {
  isMobile = b;
});


class App extends React.Component {
  componentDidMount() {
    this.enquireHandler = enquireScreen(mobile => {
      this.setState({
        isMobile: mobile,
      });
    });
  }

  componentWillUnmount() {
    unenquireScreen(this.enquireHandler);
  }
  // true默认为不可见
  state = {
    collapsed: isMobile ? true : false,
    isMobile
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  onClose = () => {
    this.setState({
      collapsed: true,
    });
  };

  render() {
    // 别名写法
    const { isMobile, collapsed } = this.state;
    // console.log(isMobile);
    return (
      <Layout>

        <SiderMenu
          collapsed={collapsed}
          isMobile={isMobile}
          onClose={this.onClose}
        />

        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }

}


export default connect()(App);
