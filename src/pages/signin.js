import React from 'react';
import AppLayouts from '../components/AppLayouts';
import SignInLayout from '../components/SignInLayout';
import Head from 'next/head';

const Signin = () => {

    return (

        <>
            <Head>
                <title> 로그인 | Apple Farm</title>
            </Head>

            <SignInLayout></SignInLayout>
            {/* <AppLayouts>로그인</AppLayouts> */}
        </>
    )
}

export default Signin;

