import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div>
            {/* a 태그는 전체를 새로고침 하기 때문에 react-router-dom을 사용! */}
            <Link to="/">Home</Link>
            <Link
                to={{
                    pathname: '/about',
                    state: {
                        fromNavagation: true,
                    },
                }}
            >
                About
            </Link>
        </div>
    )
}

export default Navigation
