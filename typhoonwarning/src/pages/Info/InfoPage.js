/***
 * 생성일자 : 2022. 01. 07
 * 포스트 페이지
 * 데이터전달된 내용이 들어가도록 수정 ( 22. 01. 08 )
 * PostViewerContainer 컴포넌트로 대체 ( 22. 01. 08. )
 */

import React from "react";
import HeaderContainer from "../../containers/common/HeaderContainer";
import InfoContainer from "../../containers/common/InfoContainer";
import FooterContainer from "../../containers/common/FooterContainer";

const InfoPage = () => {
    return (
        <> 
            <HeaderContainer />
            <InfoContainer />      
            <FooterContainer />
        </>
    );
};

export default InfoPage;