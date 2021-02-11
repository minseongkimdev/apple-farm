import React, {useState, useCallback} from 'react';


// 커스텀 훅 : 자주 사용되는 로직을 이렇게 묶어서 사용할 수 있음
// https://ko.reactjs.org/docs/hooks-overview.html#building-your-own-hooks

// 상태 관련 로직을 컴포넌트 간에 재사용 하고 싶은 경우가 생김.


// useEffect란
// 사이드 이펙트는 부정적인 의미가 아니다
// 데이터 가져오기 , 구독하기, 리액트 컴포넌트의 DOm을 수정하는 것까지 이 모든것이 SIDE effect임
// useEffect : componentDidMount, compoenentDidupdate, compoenntWillUnMount를 합친것으로 이해해도 됨 => 생성, 업데이트, 제거의 마지막에 호출되는 함수

// 아래 메서드들은 컴포넌트의 인스턴스가 생성되어 DOM 상에 삽입될 때에 순서대로 호출됩니다.
// 컴포넌트의 인스터스가 새성되어 DOM 상에 삽입될 때
// https://ko.reactjs.org/docs/react-component.html#componentwillunmount
// constructor()
// static getDerivedStateFromProps()
// render()
// componentDidMount()

//업데이트
// props, state 변경되면 갱신 발생. 
// static getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()



// useEffect란 : 컴포넌트가 렌더링 이후에 어떤일을 수행하는지를 말함버그를
// 왜 컴포넌트 안에서 불러낼까 ? 컴포넌트 내부에 둠으로써 effect를 통해 count state 변수에 접근하여
//함수 범위 안에 존재하여 특별한 API가 없어도 그 값을 얻을 수 있음.
//


// 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있는 HOOK
// compoenent가 마운트 됐을 대 UNMount 됐을 때 update 됐을 때 특정 작업을 처리가능함


// 렌더링 후에 처리해야 하는 부수적인 효과를 사이드 이펙트라고 한다면
// 일단 화면에 렌더링 할 수 있는 것은 먼저 렌더링 하고 실제 데이터는 비거ㅗㅇ기로 가져오는 것이 권장됨


// 리액트 생명주기  마운트 : 리눅스에서는 파티션 CD/dvd/ usb 같은 메모리를 특정 위치에 연결 해줄때 마운트라고 함
// 컴포넌트를 브라우저에 연결할 때 마운트라고 이해라면 좋을 듯

//: mount : 컴포넌트가 처음 실행될 때를 마운트라고 한다 onCreate같은 개념
// update :
// unmount : function

export default (initialValue = null) => {

  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];

}