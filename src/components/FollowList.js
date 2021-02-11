import React from 'react';
import PropTypes from 'prop-types';
import {List, Button, Card} from 'antd';
// import {CloseOutlined} from '@antd-design/icons';


const FollowList = ({header, data}) => {

return (

  <List style = {{marginBottom:20}}
  grid = {{gutter: 4, xs:2, md:3}}
  size = 'small'
  header= {<div>{header}</div>}
  loadMore={<div style ={{textAlign: 'center', margin: '10px 0'}}><Button>더 보기</Button></div>}
  bordered
  dataSource={data}
  renderItem={(item) => 

    (<List.Item style={{marginTop:20}}>
      <Card>
        <Card.Meta description={item.nickcname}/>
      </Card>
      </List.Item>)
  }
  />
);
};



export default FollowList;
