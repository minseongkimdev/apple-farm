import React from 'react';
import { Col, Input, Menu, Row } from 'antd';
import ReactPlayer from 'react-player';



const SignInLayouts  = ({children}) => {
  return (
    <>
    <div>

            {/*가로를 먼저 나누고, 그 가로 한칸 안에서 세로로 나눈다*/}
            {/* gutter은 컬럼 간의 패딩이 들어간다*/}
            <Row type = "flex" style={{minHeight:"100vh"}}>

              <Col md ={24}>
                {/* <video autoPlay loop muted>
                <source src={Video} type="video/mp4"/>
                </video> */}
              {/* <ReactPlayer
              url = {[
                {src: '', type: 'mp4'},
              ]}
              // url='./video/signin2.mp4'
              width='100%'
              height='100%'
              loop={true}
              playing={true}
              config={{ file: { attributes: { autoPlay: true, controls: false } }}}

              controls = {true}
              /> */}
              </Col>
                {/*전체는 24칸이다 모바일 일때는 화면을 다 사용한다*/}
                {/* <Col xs={24} md={6}>
                  left
                    
                </Col>
                <Col xs={24} md={12}>
                  center
                    
                </Col>
                <Col xs={24} md={6}>
                    
                    right
                </Col> */}
            </Row>


    </div>
    </>
  )
}


export default SignInLayouts;