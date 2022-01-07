/**
 *  생성일자 : 2022. 01. 07
 *  
 * 2022. 01. 07. : TagBox 렌더링
 *  
 */

import React from "react";
import TagBox from "../components/write/TagBox";
import WriteActionButtons from "../components/write/WriteActionButtons";
import Responsive from "../components/common/Responsive";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";

const WritePage = () =>{
    return (
        <Responsive>
            <EditorContainer />
            <TagBoxContainer />
            <WriteActionButtons />
        </Responsive>
    )
};

export default WritePage;