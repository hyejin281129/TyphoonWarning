/**
 * 생성일자 : null
 * 
 * Info페이지 추가 ( 22. 01. 09. )
 */


// import React from 'react'
import { Routes, Route } from 'react-router-dom';
// import './App.css';
import PostListPage from './pages/posts/PostListPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
// import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import EventPage from './pages/event/EventPage';
import NotionListPage from './pages/notion/NotionListPage';
import InfoPage from './pages/Info/InfoPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<InfoPage />} />
        {/* 로그인 회원가입 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* 이전 행사 */}
        <Route path="/event" element={<EventPage />} />
        {/* 공지 사항 */}
        <Route path="/notice" element={<NotionListPage />}/>
        {/* 문의 사항 */}
        <Route path="/questions" element={<PostListPage />} />
        {/* 마이페이지 */}
        <Route path="/@:username">
          <Route index element={<PostListPage />} />
        {/* <Route path="/@:username/:postId" element={<PostPage />}  /> */}
          <Route path=":postId" element={<PostPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
