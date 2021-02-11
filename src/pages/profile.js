import React from 'react'
import AppLayouts from '../components/AppLayouts'
import NicknameEditForm from '../components/NicknameEditForm'
import FollowList from '../components/FollowList'
import Head from 'next/head'



//  props 갯수가 너무 늘어나면 컴포넌트로 쪼개는게 좋다.
// 프롭이 10개정도 넘어가면 읽기 어려우니 조개보는 것도 좋아보임
const Profile = () => {

    const followingList = [{nickname : '민성'},{nickname : '병준'}];
    const followerList = [{nickname: '성연'}];
    return (
        <>
            <Head>
                <title> 내 프로필 | Apple Farm </title>
            </Head>
            <AppLayouts>
                <FollowList header="팔로잉 목록" data = {followingList} />
                <FollowList header="팔로워 목록" data = {followerList} /> 
            </AppLayouts>
            
        </>
    )
}

export default Profile
