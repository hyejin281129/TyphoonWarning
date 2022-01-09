/**
 *  생성일자 : 2022. 01. 07
 * TagBox 렌더링 ( 22. 01. 07. )
 * meta 수정 ( 22. 01. 09. )
 */

import React from "react";
import Responsive from "../components/common/Responsive";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";
import { Helmet } from "react-helmet-async";

const WritePage = () =>{
    return (
        <Responsive>
            <Helmet>
                <title>게시글 작성하기 - 태풍주의보</title>
            </Helmet>
            <EditorContainer />
            <TagBoxContainer />
            <WriteActionButtonsContainer />
        </Responsive>
    )
};

export default WritePage;