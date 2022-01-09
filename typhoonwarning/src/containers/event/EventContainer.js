/**
 * 생성일자 : 2022. 01. 09.
 * PreviousEventContainer 컴포넌트 생성
 */

import React from "react";
import EventHeader from "../../components/event/EventHeader";
import Event from "../../components/event/Event";
 
 const EventContainer = () => {
   return (
     <>
      <EventHeader />
      <Event />
     </>
   );
 };
 
 export default EventContainer;
 