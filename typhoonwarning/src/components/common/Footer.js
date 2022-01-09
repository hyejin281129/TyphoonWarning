/***
 * 생성 일자 : 2022. 01. 09
 * 
 * 
 */

import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
 
const FooterBlock = styled.div`
  bottom: 0;
  width: 100%;
  background: white;
  color: #9e9e9e;
  // color:rgb(134, 145, 207);
`;
 
 /**
  * Responsive 컴포넌트 속성에 스타일을 추가해서 새로운 컴포넌트 생성
  */
 
const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <>
      <FooterBlock>
        <Wrapper>
        태풍주의보 @제1회 2021. 10. 31.
        </Wrapper>
      </FooterBlock>
    </>
  );
};

export default Footer;