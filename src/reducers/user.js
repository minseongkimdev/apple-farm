const initialState = {
    isLoggedIn: false,
    user: null,
}

export const loginAction = data => {
    console.log('loginAction')
    return {
        type: LOGIN_ACTION,
        data,
    }
}
export const logoutAction = data => {
    console.log('lotoutAction' + data)
    return {
        type: LOGOUT_ACTION,
        data,
    }
}
const LOGIN_ACTION = 'LOGIN_ACTION'
const LOGOUT_ACTION = 'LOGOUT_ACTION'

// 아래는 리듀서의 기본 틀임.
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return {
                ...state,
                isLoggedIn: true,
                user: action.data,
            }

        case LOGOUT_ACTION:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        default:
            return state
    }
}

export default reducer
