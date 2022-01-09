/***
 * 생성일자 : 2022. 01. 10.
 * 공지사항 페이지
 * 
 */

import React from "react";
import FooterContainer from "../../containers/common/FooterContainer";
import HeaderContainer from "../../containers/common/HeaderContainer";
import NotionListContainer from "../../containers/notices/NoticeListContainer";
import PaginationContainer from "../../containers/notices/PaginationContainer"; 

 const NotionPage = () => {
     return (
         <> 
             <HeaderContainer />
             <NotionListContainer />
             <PaginationContainer />
             <FooterContainer />
         </>
     );
 };
 
 export default NotionPage;