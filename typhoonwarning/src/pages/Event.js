/**
 * 생성일자 : 22. 01. 09
 * 이전 행사 페이지
 * 
 */

 import React from "react";
 import HeaderContainer from "../containers/common/HeaderContainer";
 import FooterContainer from "../containers/common/FooterContainer";
 import EventContainer from "../containers/event/EventContainer"
 
 
 const Event = () => {
     return (
         <>
             <HeaderContainer />
             <EventContainer />
             <FooterContainer />
         </>
     );
 };
 
 export default Event;