import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'
const initialState = {}
import user from './user'
import post from './post'
// 액션을 동적으로 만들어 주는 함수
// 액션 크리에이터
//


// 사용자가 어떻게 닉ㄴ임을 바꿀지 모르기 때문에 동적으로 액션을 생성하는 액션 크리에이터
// const changeNickname = {
//     type: 'CHANGE_NICKNAME',
//     data: 'Apple Farm'
// }

// 이전 상태와 액션을 통해서 -> 다음 상태를 만들어내는 함수
// 리듀서 : 차원 축소 (이전상태, 액션) -> 을 다음 상태로 차원을 축소함

// combine Reducer을 통해서 여러개의 리듀서를 합칠 수 있다.

// 미들웨어 : 액션이 디스패치 된 다음, 해당 액션을 받아와서 업데이트 ㅇ전에 추가적인 작업을 할 수 있음
// 특정 조건에 따라 액션이 무시되게끔 할 수 있음
// 액션을 콘솔에 출력하거나 서버쪽에 로깅 가능함성능
// 액션이 디스패치 됐을 때 이를 수정해서 리듀성게 전달가능
// 액션이 발생했을 때 이에 기반하여 다른 액션이 발생되도록 할 수 있음.
// 트겆ㅇ 액션이 발생했을 때 특정 자바스크립트 함수를 실행시킬 수 있으 크리에이터


// 액션이 늘어날 수 있기 때문에 파일들을 적절히 쪼개야 한다.
// combineReduceer -> 컴파인 리듀서. 리듀서가 함수이기 때문에 쉽게 합치기 힘들다 따라서
// combinReducer의 도움을 받아야 한다면
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        // 서버 사이드 렌더링을 위해서 HYDRATE분기만 추가
        // 각 initial state는 combineReducer가 알아서 넣어준다.
        // ,,,state를 서줘야 이전 상태에 참조가 되면서 메모리를 절약할 수 있다.
        // 배포 모드일 때는 히스토리를 버린다. 배포 모드에서는 문제가 생기지 않는다.
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE' + HYDRATE)
                return {...state, ...action.payload}

            default:
                return state
        }
    },

    // 분리를 했으면 아래와 같이 합쳐줄 수 있음.
    user,
    post,
})

export default rootReducer
