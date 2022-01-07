/**
 * 생성일자 : 2022. 01. 07.
 * 글쓰기 상태 관리 리덕스
 * 
 */

import { createAction, handleActions } from "redux-actions";

// 모든 내용 초기화
const INITIALIZE = 'write/INITALIZZE';
// 특정 key값 바꾸기
const CHANGE_FIELD = 'write/CHANGE_FIELD';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

const initialState = {
  title: '',
  body: '',
  tags: [],
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
  },
  initialState,
);

export default write;