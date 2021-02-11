import React, { useCallback } from 'react'
import { Avatar, Button, Card } from 'antd'
import { logoutAction } from '../reducers/user'
import { useDispatch } from 'react-redux'

const Profile = () => {
    const dispatch = useDispatch()
    const onLogout = useCallback(e => {
        dispatch(logoutAction())
    }, true)

    return (
        <Card
            actions={[
                <div key="twit">
                    게시글
                    <br />0
                </div>,
                <div key="followings">
                    팔로잉
                    <br />0
                </div>,
                <div key="follwors">
                    팔로워
                    <br />0
                </div>,
            ]}
        >
            <Card.Meta avatar={<Avatar>AF</Avatar>} title="AppleFarm" />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    )
}
export default Profile
