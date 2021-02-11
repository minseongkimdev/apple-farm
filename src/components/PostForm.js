import React, { useCallback, useState,useRef } from 'react'
import { Form, Input, Button} from 'antd'
import { useSelector,useDispatch } from 'react-redux'
import {addPost} from '../reducers/post'

const {TextArea} = Input
const PostForm = () => {
    const { imagePaths } = useSelector(state => state.post)
    const dispatch = useDispatch();
    const imageInput = useRef(); // 실제 돔에 접근할 때 useRef 사용
    const [text, setText] = useState('asdfasdf');
    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);
    const onSubmit = useCallback(() => {
        console.log("submit");
        dispatch(addPost)
        setText('');
    }, );
    const onClickImageUpload = useCallback(() =>{
        imageInput.current.click();
    },[imageInput.current]);

    return (
        // 처음에는 인라인 스타일로 하고, 문제가 생길 때 최적화 하면 된다
        // 인라인 스타일은 리렌더링 된다
        <Form encType="multipart/form-data" onFinish={onSubmit}>
            <TextArea
             value = {text}
             onChange={onChangeText}
             maxLength={140}
             placeholder="어떤 신기한 일이 있었나요?"
             />
             <div>
                <input type='file' multiple hidden ref={imageInput}/>
                <Button onClick ={onClickImageUpload}>이미지 업로드</Button>
                <Button type = "primary" style={{float:'right'}} htmlType ="submit" >작성</Button>
             </div>
             <div>
                 {imagePaths.map((v)=>(
                     <div key={v} style={{display:'inline-block'}}>
                         <img src={v} style={{width: '200px'}} alt={v}/>
                         <div>

                             <Button>제거</Button>
                         </div>


                     </div>

                 )) }
             </div>
        </Form>
    );
};

export default PostForm
