import { createWrapper } from 'next-redux-wrapper'
// next에서 REdux를 쉽게 사용할 수 있음
// import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers'
import { applyMiddleware, createStore, compose } from 'redux'

// 여러 페이지에서 공통적으로 쓰이는 데이터들이 있다 예를들어 유저의 세션
// 부모 컴포넌트에서 묶어서 공통적으로 props로 전달하는 방법이 있지만 매우 번거롭다
// 중앙에서 하나로 관리해서 컴포넌트에 뿌려주는 '중앙저장소 역할'
// 컴포넌트가 필요할 때데이터를 부분저긍로 가져다 쓸 수 있게
// contextAPI, Apollo, mobX, redux등이 있다.
// 앱이 크지 않으면 contextAPI

// 리덕스 에러 확률이 낮다. 앱이 안정적이지만 코드량이 많다.
// mobx는 코드량이 적지만, 이슈 트래킹이 어려울 수 있다.

// 비동기는 항상 실패에 대비해야 한다
// 요청 성공 실패 이렇게 3개로 분리한다. 이것을 contextAPI에서 구현하려면 매우 번거롭다.

// 컴포넌트는 화면 그리는 역할만 하는게 좋다
// 별도의 모듈이나 라이브러리가 하는게 좋다 그래서 redux나 mobx가 하도록 한다

// 앱이 커지면, 중앙 데이터 저장소도 쪼개주는게 필요함

// 리덕스 : 리듀스에서 따온 것임
// 데이터를 변경하려면 action을 정의해야한다
// 그 action을 dispatch하면 데이터가 변경된다.
// 컴포넌트들은 알아서 데이터가 변경된다.

// 리듀서에 어떤 액션일 때 어떻게 데이터를 바꿔야 하는지 정의 해줘야 한다.
// 앱에 대한 전체 상태를 하나의 객체로 정의한다.
// 그다음 액션을 정의한다.
// 그 액션을 디스패치 하고, 어떻게 변경할 것인지 리듀서에서 직접 구현해줘야 한다.

// 데이터를 변경할 때 마다 직접 action을 만들어줘야 한다. 매우 코드량이 길어진다.
// 액션이 하나 늘어날 때마다 리듀서가 늘어난다.

// 데이터 상태를 과거로 돌릴 수 있다. 그래서 테스트 하기에도 용이하다.

// 자바스크립트에서 주의할 점 : 불변성. 객체와 객체 비교하면 다르다. const a =[];, const b= a; 이때는 a와 b는 같다.
// 객체 자체는 새로 만들어서 return 해줘야 한다. 객체를 새로 만들어야 변경 내용이 추적이 된다.

// 동일한 데이터는 ...state로 처리하고, 바뀐것만 할당해주면 된다. 왜냐하면 메모리 부족 현상 발생 가능

const configureStore = () => {
    const middleware = []
    // 개발용 미들웨어와 배포용 미들웨어가 다르기 때문에 아래와 같이 처리한다.
    const enhancer =
        process.env.NODE_ENV === 'production'
            ? // 배포용일때 데브툴 연결 안하고, 보안에 취약할 수 있기 때문에
              compose(applyMiddleware(...middleware))
            : // 개발할 때만 사용할 수 있도록
              composeWithDevTools(applyMiddleware(...middleware))

    // state, reducer를 포함하는 개념
    const store = createStore(reducer)
    return store
}

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' })

export default wrapper
