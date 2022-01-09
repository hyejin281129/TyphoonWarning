/**
 * 생성일자 : 2022. 01. 09.
 * info 만들기
 * 
 */

import React from "react";
import styled from "styled-components";
import InfoImg from "../../image/info/InfoImage.jpg";


 // 인포메이션 그림
const Infomation = styled.div`
  width: 100%;
`;

// 이거 말고 좋은 방법 없을까..
const InfoImgStyle = {
  width: "100%",
  height: "100%",
};

 // 인포메이션 제목들
// const InfoTextTitle = styled.div`
//   font-size: 1.25rem;
//   font-weight: bold;
//   color: rgb(134, 145, 207);
// `;


const Info = () => {
  return (
    <>
    <Infomation>
      <img src={InfoImg} alt="1회 태풍주의보" style={InfoImgStyle} />
    </Infomation>
    {/* 이모지 직접 만들던가 해야지;; */}
    {/* <span role="img" aria-label="typoonwarning">🌊🍃</span> */}
    {/* <InfoTextTitle>행사 안내</InfoTextTitle>
    <span>본 행사는 비공식 행사입니다.</span>
    <span>행사 일자 : 2021년 10월 31일</span>
    <span>행사 방식 : 온라인 참여</span>
    <span> 참 가 비 : 별도 안내</span>
    <InfoTextTitle>행사 위치</InfoTextTitle>
    <span>참여자들에게 온라인 링크 제공</span> */}

    </>
  );
};

export default Info;