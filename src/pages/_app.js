import firebase from 'firebase/app';

import 'firebase/analytics';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Provider } from 'react-redux';
import wrapper from '../store/configureStore';
import 'react-quill/dist/quill.snow.css';





// app의 부모
const App = ({ Component }) => {
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    const firebaseConfig = {
    apiKey: "AIzaSyDqhNMNyRB8csBSE2zWIu6FuBjRB8b-VU0",
    authDomain: "apple-farm-8c999.firebaseapp.com",
    projectId: "apple-farm-8c999",
    storageBucket: "apple-farm-8c999.appspot.com",
    messagingSenderId: "214952563897",
    appId: "1:214952563897:web:39273a36c38fbe4d837768",
    measurementId: "G-M0R4G2Z3BX"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    return (
        <>
            {/* next 6버전부터는 provider가 안들어 간다. */}
            <Head>
                <meta charset="utf-8" />
                <title>Apple Farm</title>
            </Head>
            <Component />

        </>
    )
}
// https://ko.reactjs.org/docs/typechecking-with-proptypes.html
//PropTypes : 앱이 커짐에 따라 타입 체크를 통해 버그를 예빵할 수 있음
// 데이ㅓㅌ의 유효성을 검증하기 위해서 유효성 검사기를 내보냄


// 
App.propTypes = {
    Component: PropTypes.element.isRequired,
}

export default wrapper.withRedux(App)
