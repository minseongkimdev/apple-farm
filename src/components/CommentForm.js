import React, {useCallback} from 'react';
import {useSelector} from 'react-redux'
import {Form, Input, Button} from 'antd';
import useInput from '../hooks/useinput';

export default function CommentForm(){


  const [commentText, onChangeCommentText] = useInput('');
  const id = useSelector((state) => state.user.me?.id)

  const onSubmitComment = useCallback(() => {


  },[commentText]);


  return(<div>

    <Form onFinish={onSubmitComment}>
      <Form.Item>
      <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}/>
      <Button type="primary" htmlType="submit">작성</Button>
      </Form.Item>

    </Form>
  </div>)

};