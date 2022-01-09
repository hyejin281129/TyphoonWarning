/**
 * 생성일자 : null
 * 
 */


// import React from 'react'
import { Routes, Route } from 'react-router-dom';
// import './App.css';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import Event from './pages/Event';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        {/* 로그인 회원가입 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* 이전 행사 */}
        <Route path="/Event" element={<Event />} />
        {/* 문의 사항 */}
        <Route path="/write" element={<WritePage />} />
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
