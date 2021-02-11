import React, { useCallback } from 'react'
import { Button } from 'antd'
import { AppleOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { loginAction } from '../reducers/user'

const SignIn = () => {
    // 스토어의 내장함수, 액션을 발생시키는 함수
    // 액션을 파라미터로 전달한다.

    const dispatch = useDispatch()
    const onClick = useCallback(e => {
        dispatch(loginAction())
    }, true)

    return (
        <div>
            {/* <AppleOutlined /> */}
            <Button type="primary" onClick={onClick}>
                {'로그인'}
            </Button>
        </div>
    )
}
export default SignIn
