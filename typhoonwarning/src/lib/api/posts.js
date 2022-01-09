/**
 * 생성일자 : 22. 01. 07
 * 포스트 쓰기 API 요청 ( 22. 01. 07. )
 * yarn add quill 설치 ( 에디터 )
 * 포스트 보여주기 API 요청 ( 22. 01. 08. )
 * 포스트 목록 조회 API 요청 ( 22. 01. 08. )
 * yarn add qs로 qs 설치함 => 필요없어서 다시 삭제함 ( 22. 01. 09. )
 * 포스트 수정 요청 ( 22. 01. 09. )
 * 포스트 삭제 요청 ( 22. 01. 09. )
 * 
 */

// 이거 이제 안써도 됨
// import qs from 'qs'
import client from './client';

export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

// 포스트 보여주기
export const readPost = (id) => client.get(`/api/posts/${id}`);

// 포스트 목록 조회
export const listPosts = ({ page, username, tag }) => {
  // const queryString = qs.stringify({
  //   page,
  //   username,
  //   tag,
  // });
  // return client.get(`/api/posts?${queryString}`);
  // qs 대신 아래와 같이 사용함
  return client.get(`/api/posts`, {
    params: { page, username, tag },
  })
};

// 포스트 수정
export const updatePost = ({ id, title, body, tags }) =>
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });

// 포스트 삭제
export const removePost = (id) => client.delte(`/api/posts/${id}`);