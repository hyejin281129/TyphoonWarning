/***
 * 생성일자 : 22. 01. 09.
 * 이벤트 목록을 보여줄 예정
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const EventTitleBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  max-width: 1920px;
  overflow: hidden;
  margin: 3rem auto 0 auto;
  display: flex;
  flex-direction: row;
  align-content: space-around;
  justify-content: space-between;
  h3 {
    padding-left: 2rem;
    margin: 0;
    color: #101010;
    font-weight: 700;
    font-size: 2rem;
    line-height: 56px;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const EventList = styled.div`
  margin-right: 2rem;
  button {
    text-align: center;
    line-height: 50px;
    width: 50px;
    height: 50px;
    border-radius: 60px;
    border: 2px solid rgb(134, 145, 207);
    cursor: pointer;
    &:hover {
      background: rgb(134, 145, 207);
      color: white;
    }
    &:active {
      background: rgb(134, 145, 207);
    }
  }
`;

const activityEventList = {
  background: "rgb(134, 145, 207)",
  color: "white"
};


const EventHeader = () => {
  return (
    <EventTitleBlock>
      {/* 행사타이틀 */}
      <h3>행사목록</h3>
      {/* 행사 목록 */}
      <EventList>
        <button className={activityEventList}>1회</button>
      </EventList>
      {/* 행사내용 */}
    </EventTitleBlock>
  );
};
 
export default EventHeader;