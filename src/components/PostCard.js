import React,{ useState,useCallback} from 'react';
import {useSelector} from 'react-redux';
import {Card, Comment, Tooltip, List,Avatar} from 'antd';
import {HeartOutlined, MessageOutlined, HeartTwoTone} from '@ant-design/icons';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
// 컴포넌트 설계시 대충 한번 그려보는 거다있음
// 안드로이드와 비슷하다

// post 객체는 부모로부터 직접 받아오고 있다
// 반복문을 통해 생성되는 key를 넣어줘야 함
const PostCard = ({post}) => {

    // const {me} = useSelector((state) => state.user);
    // const {post} = useSelector((state) => state.post);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [liked, setLiked] = useState(false);
    const onToggleLike = useCallback(()=> {
        
        setLiked((prev) => !prev);
        
    },[]);
    const onToggleComment = useCallback(()=> {
        
        setCommentFormOpened((prev) => !prev);
        
    },[]);
    // const id = me?.id;

    return <div>
        <Card
        style={{marginTop:'20px'}}
        // &&  expression -> true일때만 렌더링 된다.
        // 1개 이상일때만 렌더링 되도록
        cover ={post.Images[0] && <PostImages images={post.Images}/>}
        actions = {[
            liked
                ? <HeartTwoTone towToneColor="#eb2f96" key="heart" onClick={onToggleLike}/>
                : <HeartOutlined key="heart" onClick ={onToggleLike}/>,
            <MessageOutlined key="message" onClick={onToggleComment}/>

            
            
        ]}
        >
        </Card>
        {commentFormOpened &&
            <div>
                <CommentForm/>
                <List
                header={`${post.Comments.length}개의 댓글`}
                itemLayout="horizontal"
                dataSource={post.Comments}
                renderItem={(item)=>(
                    <li>
                        <Comment
                            author={item.User.nickname}
                            avatar={<Avatar>item.User.nickname</Avatar>}>
                        </Comment>


                    </li>
                )}
                // content={post.Comments.item[0].content}

                />
                댓글 부분 
            </div>
            }


    </div>
}

export default PostCard
