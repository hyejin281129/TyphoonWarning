/***
 * 생성일자 : 2022. 01. 07
 * 포스트 수정 및 삭제 추가 ( 2022. 01. 09. )
 * 
 */

import React, { useEffect } from 'react';
import WriteActionButtons from '../../components/write/WriteActionButtons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { writePost, updatePost } from '../../modules/write';

const WriteActionButtonsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { title, body, tags, post, postError, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    if (originalPostId) {
      dispatch(
        updatePost({
          title,
          body,
          tags,
          id: originalPostId,
        })
      );
    }
    dispatch(
      writePost({
        title,
        body,
        tags,
      }),
    );
  };
  
  // 취소
  const onCancel = () => {
    // router 버전 6
    navigate(-1);
    // router 버전 5
    // history.goBack();
  };

  // 성공 혹은 실패 시 할 작업
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      // router 버전 6
      navigate(`/@${user.username}/${_id}`);
      // router 버전 5
      // history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [navigate, post, postError]);
  return (
    <WriteActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default WriteActionButtonsContainer;