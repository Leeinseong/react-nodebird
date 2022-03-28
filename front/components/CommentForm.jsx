import React, { useEffect, useCallback, useState } from "react";
import { Button, Form, Input } from "antd";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import useInput from "../hooks/useInput";
import { ADD_COMMENT_REQUEST } from "../reducers/post";

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();

  const id = useSelector((state) => state.user.me?.id);
  const { addCommentDone, addCommentLoading } = useSelector(
    (state) => state.post
  );

  const [commentText, onChangeCommentText] = useInput("");

  useEffect(() => {
    if (addCommentDone) {
      onChangeCommentText("");
    }
  }, [addCommentDone]);

  const onSubmitComment = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, userId: id, postId: post.id },
    });
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea
          rows={4}
          value={commentText}
          onChange={onChangeCommentText}
        />
        <Button
          style={{ position: "absolute", zIndex: 1, right: 0, bottom: -40 }}
          type="primary"
          htmlType="submit"
          loading={addCommentLoading}
        >
          댓글등록
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
