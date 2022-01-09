import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../image/logo2.png';


/**
 * 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

const AuthTemplateBlock = styled.div`
  position: relative;
  width: 100%;
  height: 790px;
  max-width: 1920px;
  overflow: hidden;
  margin: 0 auto;
  /* flex로 내부 내용 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoStyle = {
  width: "100px",
  height: "50px",
};

/* 흰색 박스 */
// const WhiteBox = styled.div`
//   .logo-area{
//     display: block;
//     padding-bottom: 2rem;
//     text-align: center;
//     font-weight: bold;
//     letter-spacing: 2px;
//   }
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
//   padding: 2rem;
//   width: 360px;
//   background: white;
//   border-radius: 2px;
// `

const AuthTemplate = ({ children }) => {
  return (
      <AuthTemplateBlock>
          {/* <div className="logo-area">
            <img src={Logo} alt="태풍주의보" style={LogoStyle} />
          </div> */}
          {children}
      </AuthTemplateBlock>
  );
};

export default AuthTemplate;
