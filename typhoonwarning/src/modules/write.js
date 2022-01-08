/**
 * 생성일자 : 2022. 01. 07.
 * 글쓰기 상태 관리 리덕스
 * 글쓰기 API 호출 ( 2022. 01. 07. )
 * 
 */

import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

// 모든 내용 초기화
const INITIALIZE = 'write/INITALIZZE';
// 특정 key값 바꾸기
const CHANGE_FIELD = 'write/CHANGE_FIELD';
// 포스트 수정
const SET_ORIGINAL_POST = 'write/SET_ORIGINAL_POST';
// 포스트 작성
const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE, 
] = createRequestActionTypes('write/WRITE_POST');
// 포스트 수정
const [
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_FAILURE, 
] = createRequestActionTypes('write/UPDATE_POST');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(WRITE_POST, ({ title, body, tags }) => ({
  title,
  body,
  tags,
}));
export const setOriginalPost = createAction(SET_ORIGINAL_POST, post => post);
// 포스트 수정
export const updatePost = createAction(
  UPDATE_POST,
  ({ id, title, body, tags }) => ({
    id,
    title,
    body,
    tags,
  }),
);


// 사가 생성
const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
const updatePostSaga = createRequestSaga(UPDATE_POST, postsAPI.updatePost);

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
  yield takeLatest(UPDATE_POST, updatePostSaga);
}

const initialState = {
  title: '',
  body: '',
  tags: [],
  post: null,
  postError: null,
  originalPostId: null,
};

const write = handleActions(
  {
    // initialState를 넣으면 초기 상태로 바뀜
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      // 특정 key 값을 업데이트
      [key]: value,
    }),
    [WRITE_POST]: state => ({
      ...state,
      // post와 postError를 ㅊ ㅗ기화
      post: null,
      postError: null,
    }),
    // 포스트 작성 성공
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    // 포스트 작성 실패
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    // 포스트 수정(
    [SET_ORIGINAL_POST]: (state, { payload: post }) => ({
      ...state,
      title: post.title,
      body: post.body,
      tags: post.tags,
      originalPostId: post._id,
    }),
    // 포스트 수정 성공
    [UPDATE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    // 포스트 수정 실패
    [UPDATE_POST_SUCCESS]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);

export default write;