import React from 'react';

import {Layout, Menu} from 'antd';
import {AppleOutlined} from '@ant-design/icons';
//  https://medium.com/zestgeek/ant-design-navbar-with-responsive-drawer-a8d718e471e0
export default function Navigation(){
  
  const {Header} = Layout;

  return (
    <div>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: 'white'}}>
      
      <Menu mode="horizontal" defaultSelectedKeys={['2']} style={{textAlign:'center',backgroundColor: 'white', borderBottom: '0dx'}}>
        {/* <Menu.Item key="1">로그인/회원가입</Menu.Item> */}
        {/* <Menu.Item key="1" title='Apple Farm' style={{borderBottom: '0dx'}}>AppleFarm</Menu.Item> */}
        <AppleOutlined style={{ fontSize: '24px', color: 'black' }}/>
        {/* <Menu.Item key="3">nav 3</Menu.Item> */}
      </Menu>
    </Header> 
    </div>
  );
}

