import React from 'react'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'
import Detail from './routes/Detail'
import Home from './routes/Home'
import Navigation from './components/Navigation'
function App() {
    return (
        <HashRouter>
            {/* Route에는 두개의 Props가 들어간다 */}
            <Navigation />
            <Route path="/" exact={true} component={Home} />
            <Route path="/detail" component={Detail} />
        </HashRouter>
    )
}

export default App

// 라우터의 역할 : URL 에서 화면에 뿌려줄 React JS를 선택적으로 렌더링 해줌
