/**
 * 생성일자 : 2022. 01. 10.
 * 공지사항 상태 관리 리덕스
 */

import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as notionsAPI from '../lib/api/notions';
import { takeLatest } from 'redux-saga/effects';

// 모든 내용 초기화
const INITIALIZE = 'write/INITALIZZE';
// 특정 key값 바꾸기
const CHANGE_FIELD = 'write/CHANGE_FIELD';
// 공지사항 수정
const SET_ORIGINAL_NOTION = 'write/SET_ORIGINAL_POST';
// 공지사항 작성
const [
  WRITE_NOTION,
  WRITE_NOTION_SUCCESS,
  WRITE_NOTION_FAILURE, 
] = createRequestActionTypes('notionWrite/WRITE_NOTION');
// 포스트 수정
const [
  UPDATE_NOTION,
  UPDATE_NOTION_SUCCESS,
  UPDATE_NOTION_FAILURE, 
] = createRequestActionTypes('notionWrite/UPDATE_NOTION');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(WRITE_NOTION, ({ title, body, tags }) => ({
  title,
  body,
  tags,
}));
export const setOriginalPost = createAction(SET_ORIGINAL_NOTION, post => post);
// 포스트 수정
export const updatePost = createAction(
  UPDATE_NOTION,
  ({ id, title, body, tags }) => ({
    id,
    title,
    body,
    tags,
  }),
);


// 사가 생성
const writeNotionSaga = createRequestSaga(WRITE_NOTION, notionsAPI.writeNotion);
const updateNotionSaga = createRequestSaga(UPDATE_NOTION, notionsAPI.updateNotion);

export function* writeSaga() {
  yield takeLatest(WRITE_NOTION, writeNotionSaga);
  yield takeLatest(UPDATE_NOTION, updateNotionSaga);
}

const initialState = {
  title: '',
  body: '',
  tags: [],
  post: null,
  postError: null,
  originalPostId: null,
};

const notionWrite = handleActions(
  {
    // initialState를 넣으면 초기 상태로 바뀜
    [INITIALIZE]: state => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      // 특정 key 값을 업데이트
      [key]: value,
    }),
    [WRITE_NOTION]: state => ({
      ...state,
      // post와 postError를 ㅊ ㅗ기화
      post: null,
      postError: null,
    }),
    // 포스트 작성 성공
    [WRITE_NOTION_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    // 포스트 작성 실패
    [WRITE_NOTION_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    // 포스트 수정시 내용 보여주기
    [SET_ORIGINAL_NOTION]: (state, { payload: post }) => ({
      ...state,
      title: post.title,
      body: post.body,
      tags: post.tags,
      originalPostId: post._id,
    }),
    // 포스트 수정 성공
    [UPDATE_NOTION_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    // 포스트 수정 실패
    [UPDATE_NOTION_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);

export default notionWrite;