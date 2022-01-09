/**
 * 생성일자 : 2022. 01. 09.
 * 이벤트 내용
 * 1회차 내용 추가 ( 22. 01. 10 )
 * MongoDB를 사용하고 싶음 -> 사용해보자
 */

import React from "react";
import styled from 'styled-components';

const InfoTextTitle = styled.div`

`;


const Event = () => {
  return (
    <>
    {/* 이모지 직접 만들던가 해야지;; */}
    <span role="img" aria-label="typoonwarning">🌊🍃</span> */}
    <InfoTextTitle>행사 안내</InfoTextTitle>
    <span>본 행사는 비공식 행사입니다.</span>
    <span>행사 일자 : 2021년 10월 31일</span>
    <span>행사 방식 : 온라인 참여</span>
    <span> 참 가 비 : 별도 안내</span>
    <InfoTextTitle>행사 위치</InfoTextTitle>
    <span>참여자들에게 온라인 링크 제공</span>

    </>
  );
};

export default Event;