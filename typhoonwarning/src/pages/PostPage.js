/***
 * 생성일자 : 2022. 01. 07
 * 포스트 페이지
 * 데이터전달된 내용이 들어가도록 수정 ( 22. 01. 08 )
 * PostViewerContainer 컴포넌트로 대체 ( 22. 01. 08. )
 * meta 변경하기 ( 22. 01. 09. )
 */

import React from "react";
// import PostViewer from "../components/post/PostViewer";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostViewerContainer from "../containers/post/PostViewerContainer";
// import { Helmet } from "react-helmet-async";

const PostPage = () => {
    return (
        <> 
            <HeaderContainer />
            {/* <PostViewer /> */}
            <PostViewerContainer />
        </>
    );
};

export default PostPage;