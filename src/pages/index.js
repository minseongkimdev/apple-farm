import { useSelector } from 'react-redux';
import AppLayouts from '../components/AppLayouts';
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import Category from '../components/Category';
import Header from '../components/Header';
const Home = () => {
    // useSelector 훅을 통해 리덕스 스토어의 상태에 접근 가능함

    const { isLoggedIn } = useSelector(state => state.user)
    const { mainPosts } = useSelector(state => state.post)
    return (
        <div>
        <AppLayouts>
            {/* 컴포넌트 이름 부터 정한다 */}
            {/* 의미가 있는 단위로 컴포넌트를 나눈다. */}
            {/* 로그인 되어 있을 때만 포스트 폼이 보이도록 한다 */}
            <Category style={{marginTop:'64px'}}/>
            {isLoggedIn && <PostForm />}
            {mainPosts.map(post => 
                // 안티패턴 : 인덱스를 키로 쓰면 안된다. 반복되는 것들이 지워질 수 있는 가능성이 있기 때문에 무언가 바뀌지 않은 것이면 키를 인덱스로
                // 의미가 있는 단위부터 먼저 컴포넌트로 나누고 그다음에 컴포넌트를 구현하라때
                <PostCard key={post.id} post={post} />
            )}
            
        </AppLayouts>
        </div>
    )
}

export default Home
