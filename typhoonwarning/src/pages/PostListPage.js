/**
 * 생성일자 /: null
 * 
 * 게시판 리스트 보이게 변경 ( 2022. 01. 08 )
 * 페이지네이션 기능 구현 ( 2022. 01. 08 )
 */

import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import PaginationContainer from "../containers/posts/PaginationContainer";
import PostListContainer from "../containers/posts/PostListContainer";

const PostListPage = () => {
    return (
        <>
            <HeaderContainer />
            <PostListContainer />
            <PaginationContainer />
        </>
    );
};

export default PostListPage;