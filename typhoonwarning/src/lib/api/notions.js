/**
 * 생성일자 : 22. 01. 10
 * 공지사항 api
 * 
 */

import client from './client';

// 공지사항 작성하기
export const writeNotion = ({ title, body, tags }) =>
  client.post('/api/notions', { title, body, tags });

// 공지사항 보여주기
export const readNotion = (id) => client.get(`/api/notions/${id}`);

// 공지사항 목록 조회
export const listNotions = ({ page, username, tag }) => {
  return client.get(`/api/notions`, {
    params: { page, username, tag },
  })
};

// 공지사항 수정
export const updateNotion = ({ id, title, body, tags }) =>
  client.patch(`/api/notions/${id}`, {
    title,
    body,
    tags,
  });

// 공지사항 삭제
export const removeNotion = (id) => client.delete(`/api/notions/${id}`);