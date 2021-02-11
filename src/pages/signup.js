import React, {useCallback, useState} from 'react';
import Head from 'next/head';
import {Form, Input, Checkbox, Button} from 'antd';
import AppLayouts from '../components/AppLayouts';
import styled from 'styled-components';
import useInput from 'hooks/useinput';
// useCallback  : useMemo와 비슷한 훅임안된다 (퍼포먼스 최적화를 위해서 사용되는 훅이다)
// 리액트 개발자 도구 > Profiler 탭의 Start Profiling기능(녹화 버튼)을 사용하면 컴포넌트의 랜더링을 분석할 수 있다.
// https://thisblogfor.me/react/hooks_memoization/

// useMemo는 특정 결과값을 재사용 할 때 사용하는 반면
// useCallback은 특정 함수를 새로 만들지 않고 재사용 하고 싶을 때 사용함

// 렌더링 될 대 함수도 다시 생성하는데 그것을 막기 위함.

// useState : 컴포넌트에서 바뀌는 값 관리하기. 컴포넌트에서 상태를 관리할 수 있음!!
//  16.8 버전에서는 함수형 컴포넌트에서는 상태를 관리할 수 없었다. 하지만 hooks라는 기능을 통해 컴포넌트에서도 상태를 관리할 수 있게 되었음

// 컴포넌트에서는 동적인 값을 상태라고 부른다. 리액트에서 useState라는 함수가 있는데 이것을 사용하면 컴포넌트에서 상태 관리 가능함


const ErrorMessage = styled.div`

`;

const Signup = () =>   {
  // 훅스들의 세트를 묶을 수 있다.
  // 반복되는것들을 커스텀 훅을 통해 묶을 수 있다.
  // 컴포넌트 로직 자체를 분할하거나 재사용할 수 있음.

  // 
  // const [nickname, setNickname] = useState('');
  // const onChangeNickname = useCallback((e) => {
  //   setNickname(e.target.value);
  // }, []);
// 값과 세터, 초기값을 같이 선언한다고 이해하면 될듯
// https://ko.reactjs.org/docs/hooks-state.html
  // const [<상태 값 저장 변수>, <상태 값 갱신 함수>] = useState(<상태 초기 값>);


  // const [id, onChangeId] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [nicknameError, setNicknameError] = useState(false);
  // const [password, onChangePassword] = useInput('');
  // const [passwordCheck, setPasswordCheckError] = useInput('');
  // const [passwordError, setPasswordError] = useState(false);
  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState('');
  const onChangeTerm = useCallback((e) => {
    console.log('onChangeTerm : ' + e)
    setTerm(e.target.checked);
    setTermError(false);
  }, []);


  // function onSubmit() {

  // }

  const onSubmit = useCallback(() => {
    console.log('onSubmit');
    console.log(nickname.length)
    console.log(nicknameError)
    if(nickname.length < 2 || nickname.length > 8) return setNicknameError(true);
    
    
  
    // if(password !== passwordCheck){
    //   return setPasswordError(true);

    // }
    if(!term){
      return setTermError(false);
    }
      console.log(id, nickname, password);
  }, [nickname, term]);

  return (

    <AppLayouts>

      <Head>
        <title>회원가입 | AppleFarm</title>
      </Head>
      <Form onFinish={onSubmit}>

        <div>
          <label>
            닉네임을 입력해주세요.
          </label>
          <Input name ="user-nick" value = {nickname} required onChange = {onChangeNickname}/>
          {nicknameError && <div style = {{color : 'red'}}>사용하실 수 없는 닉네임 입니다.</div>}
        <div>
          <Checkbox name = "user-term" checked = {term} onChanged={onChangeTerm}>약관에 동의합니다.</Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div>
        <div style={{marginTop : 10}}>
          <Button type="primary" htmlType="submit">약관에 동의하고 가입하기</Button>
        </div>
        </div>
      </Form>


    </AppLayouts>
  );

};


export default Signup;