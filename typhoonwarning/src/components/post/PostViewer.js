/**
 * 생성일자 : 22. 01. 08.
 * PostViewer 컴포넌트
 * porps를 사용할 수 있도록 변경 ( 22. 01. 08. )
 * SubInfo와 Tags 컴포넌트를 재사용 할 수 있도록 변경 ( 22. 01. 08. )
 * meta 변경하기 ( 22. 01. 09. )
 * 
 */

import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive'; 
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
  // 에러 발생 시
  if (error) {
    console.log(error);
    if (error.response && error.response.status === 404 ) {
      return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  // 로딩 중이거나 아직 포스트 데이터가 없을 때
  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;
  
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
          hasMarginTop
        />
        <Tags tags={tags} />
      </PostHead>
      {actionButtons}
      <PostContent
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </PostViewerBlock>
  );
};

export default PostViewer;