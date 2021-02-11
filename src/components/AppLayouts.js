import React from 'react'
import { Col, Input, Menu, Row, Layout } from 'antd'
import Link from 'next/link'
import Profile from './Profile'
import SignIn from './SignIn'
import PostCard from './PostCard'
import PostForm from './PostForm'
import { useSelector } from 'react-redux'
import Navigation from './Navigation';
import Footer from './Footer';
// 모바일 -> 태블릿 -> 데스크탑 순으로 디자인 하는게 효율적임
// 가로 먼저 그리드를 나누고 그다음 세로로 나눈다

// xs : 모바일 ,sm : 태블릭, md : 작은 데스크탑
const AppLayouts = ({ children }) => {

    // redux의 상태를 구독
    const { isLoggedIn } = useSelector(state => state.user);
    // const {Layout} = Layout;

    return (
        <div>
                        <Layout>

            <Navigation/>
            {/* <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">
                        <a>Apple Farm</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">
                        <a>프로필</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search enterButtn style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signin">
                        <a>로그인</a>
                    </Link>
                </Menu.Item>
            </Menu> */}

            {/*가로를 먼저 나누고, 그 가로 한칸 안에서 세로로 나눈다*/}
            {/* gutter은 컬럼 간의 패딩이 들어간다*/}
            <Row gutter={8}>
                {/*전체는 24칸이다 모바일 일때는 화면을 다 사용한다*/}
                <Col xs={24} md={6}>
                    {isLoggedIn ? <Profile /> : <SignIn />}
                </Col>
                <Col xs={24} md={12}>
                    {/* {isLoggedIn ? <PostForm /> : <PostCard />} */}
                    {children}
                </Col>
                <Col xs={24} md={6}>
                </Col>
            </Row>
            <Footer/>
            </Layout>

        </div>
    )
}

export default AppLayouts
