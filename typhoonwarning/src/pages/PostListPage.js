/**
 * 생성일자 /: null
 * 
 * 게시판 리스트 보이게 변경 ( 2022. 01. 08 )
 * 페이지네이션 기능 구현 ( 2022. 01. 08 )
 */

import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
// import PaginationContainer from "../containers/posts/PaginationContainer";
// import PostListContainer from "../containers/posts/PostListContainer";
import InfoContainer from "../containers/common/InfoContainer";
import FooterContainer from "../containers/common/FooterContainer";


const PostListPage = () => {
    return (
        <>
            <HeaderContainer />
            <InfoContainer />
            {/* <PostListContainer /> */}
            {/* <PaginationContainer /> */}
            <FooterContainer />
        </>
    );
};

export default PostListPage;