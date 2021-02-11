import React, {useState} from "react";

// 리액트의 라우터는 서드파티 라이브러리, 화면전환을 도와주는 역할을 함. 기본적으노 웹에서는 a태그로 전환했지만
// 리액트의 라우터를 통해 Link 태그를 사용하여 화면을 전환
// 변화가 있는 컴포넌트만 업데이트 하여 효율적으로 성능을 관리하는 구조, 페이지 이동시에도 굳이 화면을 새로고침 할 필요 없음
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import Auth from "../routes/Auth";
import Home from "../routes/Home";

// 컴포넌트란 앱을 이루는 최소단위. 아것들이 유기적으로 잘 연동되고 동작되어 웹 어플리케이션을 동작하도록 함

// functional component
// 클래스형 컴포넌트에 비해 훨씬 짧고 직관적인 코드를 짤 수 있다. Hook이 도입되면서 함수형 컴포넌트에서도 클래스형 컴포넌트의 라이프 사이클 메서드와 같은 기능을 사용 할 수 있다


const AppRouter = () => {
    // Hook. react 16.8에 새로 추가됨, 클래스 작성할 필요 없이 상태값을 저장 가능
    // 컴포넌트로부터 상태 관련 로직을 추상화할 수 있음. 이로 인해 독립적인 테스트와 재사용이 가능함

    // 아래 코드는 Hook을 호출하여 함수 컴포넌트 안에 State를 추가한 것. 이 state는 컴포넌트가 다시 렌더링 되어도 그대로 유지됨
    // useState는 현재의 state값과 이 값을 업데이트 하는 함수를 쌍으로 제공함

    // 함수 컴포넌트 에서 React state와 생명주기 기능을 연동(Hook into)할 수 있게 해주는 함수
    // class를 따로 선언하지 않아도 된다, 함수형 컴포넌트에서도 가변적인 상태를 지니고 있을 수 있게 됨

    //


    const [isLoggedIn, setIsLoggedIn] = useState(false);


    // 로그인 상태일때 화면과, 로그인 상태가 아닐 때 화면을 렌더링 해주기 위함

    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <Route exact path="/">
                        <Home/>
                    </Route>
                ) : (
                    <Route exact path="/">
                        <Auth/>
                    </Route>
                )}
            </Switch>
        </Router>
    );
}

export default AppRouter;

