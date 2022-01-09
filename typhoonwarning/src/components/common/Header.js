/***
 * 
 * 
 * 2022. 01. 07. : 로그아웃 기능 추가
 * 
 * 
 */

import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';
import Logo from '../../image/logo2.png';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background: white;
  color:rgb(134, 145, 207);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

/**
 * Responsive 컴포넌트 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-item: center;
  }
`;

// 로고
const logostyle = {
  height: "30px",
}

// 메뉴

const Ul = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;

@media (max-width: 800px){
  display: none;
}
`;


const Li = styled.li`
  margin: 0 30px;
  color: black;
  font-size: 1.25rem;
  cursor: pointer;
`;

// 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해 주는 컴포넌트
const Spacer = styled.div`
  height: 4rem;
`;

// 유저
const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;



// user값이 주어졌을 경우 로그아웃 버튼을 보여준다.
// 로그아웃 버튼을 누르면 로그아웃에 해당하는 함수를 호출시킨다.
const Header = ({ user, onLogout }) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          {/* 로고 */}
          <Link to="/" className="logo">
            <img src={Logo} alt="태풍주의보" style={logostyle} />
          </Link>
          {/* 메뉴 */}
          <Ul>
            <Li><Link to="/event">행사 목록</Link></Li>
            <Li><Link to="/notice">공지 사항</Link></Li>
            <Li><Link to="/questions">문의 사항</Link></Li>
          </Ul>
          {/* 로그인 / 로그아웃 */}
          { user ? (
            <div className="right">
              <UserInfo>{user.username} 님</UserInfo>
              <Button onClick={onLogout}>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button to="/login">로그인</Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;