import React,{useMemo} from 'react';
import {Form, Input} from 'antd';

//  useMemo : 두번째 배열이 바뀌지 전까지 값을 기억함
// 함수 컴포넌트는 매번 함수가 새로 그려지며 실행되기 때문에 한번만 실행되는 함수도 계속 호출되는 문제 발생함
// 변경되는 값이 없다면 한번만 실행후 값을 보관하는 역할로 쓸 수 있음계속

// useMemo를 통해 스타일을 기억하면 이 부분을 다시 그리지 않아서 최적화 된다.
// useMemo말고 스타일 컴포넌트 써도 되고 sass를 써도 된다
const NicknameEditForm = () => {

  const style = useMemo(() => ({marginBotton: '20px', border: '1px solid #d9d9d9', padding: '30px'}, []));
  
  
  return (
    <Form style={style}>
      <Input.Search addonBefor= '닉네임' enterButton='수정'/>
    </Form>
  );

};

export default NicknameEditForm;


