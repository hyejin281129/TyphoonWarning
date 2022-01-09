/**
 * 
 * 생성일자 : null
 * 
 * 글쓰기 리덕스 모듈 등록 ( 22. 01. 07. )
 * 포스트 리덕스 모듈 등록 ( 22. 01. 08. )
 * 포스트 리스트 리덕스 모듈 등록 ( 22. 01. 08. )
 * 
 */

import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    // 글쓰기
    write,
    // 포스트
    post,
    // 포스트 리스트
    posts,
});

export function* rootSaga(){
    yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga()]);
}

export default rootReducer;