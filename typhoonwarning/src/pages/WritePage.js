/**
 *  생성일자 : 2022. 01. 07
 *  
 * 2022. 01. 07. : TagBox 렌더링
 *  
 */

import React from "react";
import Responsive from "../components/common/Responsive";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import WriteActionButtonsContainer from "../containers/write/WriteActionButtonsContainer";

const WritePage = () =>{
    return (
        <Responsive>
            <EditorContainer />
            <TagBoxContainer />
            <WriteActionButtonsContainer />
        </Responsive>
    )
};

export default WritePage;