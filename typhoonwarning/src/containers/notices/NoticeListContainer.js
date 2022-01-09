/**
 * 생성일자 : 2022. 01. 10.
 * 컴포넌트 생성
 */

import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NoticeList from "../../components/notices/NoticeList"; 
import { listPosts } from "../../modules/posts";

const NoticeListContainer = () => {
  const { username } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    const tag = searchParams.get('tag');
    const page = parseInt(searchParams.get('page'), 10) || 1;    
    // const { tag, page } = qs.parse(useLocation, {
    //   ignoreQueryPrefix: true,
    // });
    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, searchParams, username]);

  return (
    <NoticeList
      loading={loading}
      error={error}
      posts={posts}
      showWriteButton={user}
    />
  );
};

export default NoticeListContainer;
