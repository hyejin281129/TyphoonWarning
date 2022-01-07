import Post from "../../models/post"; 
import mongoose from "mongoose";
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

// 포스터 수정 삭제 권한
export const getPostById = async (ctx, next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }
  try {
    const post = await Post.findById(id);
    // 포스트가 존재하지 않을 때
    if (!post) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.state.post = post;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
};


/* 포스트 작성
POST /api/posts
  {
    title: '제목',
    body: '내용',
    tags: ['태그1', '태그2']
  }
*/

export const write = async ctx => {
  const schema = Joi.object().keys({
    // 객체가 다음 필드를 가지고 있음을 검증
    title: Joi.string().required(), // required()가 있으면 필수 항목
    body: Joi.string().required(),
    tags: Joi.array()
      .items(Joi.string())
      .required(), // 문자열로 이루어진 배열
  });

  // 검증하고 나서 검증 실패인 경우 에러 처리
  const result = schema.validate(ctx.request.body);
  if(result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { title, body, tags } = ctx.request.body;
  const post = new Post({
    title,
    body,
    tags,
    // 사용자
    user: ctx.state.user,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, 2);
  }
};

/* 포스트 목록 조회
GET /api/posts?username=&tag=&page=
*/
export const list = async ctx => {
  // query는 문자열이기 때문에 숫자로 변환해 주어야 합니다.
  // 값이 주어지지 않았다면 1을 기본으로 사용합니다.
  const page = parseInt(ctx.query.page || '1', 10);

  if (page < 1) {
    ctx.status = 400;
    return;
  }

  /*
   특정 사용자가 작성한 포스트만 조회하거나
   특정 태그가 있는 포스트만 조회하는 기능
  */
  const { tag, username } = ctx.query;
  // tag, username 값이 유효하면 객체 안에 넣고 그렇지 않으면 넣지 않음
  const query = {
    ...(username ? { 'user.username': username } : {}), 
    ...(tag ? { tags: tag } : {}),
  } 
  
  try {
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      // 페이지 10개씩 보여주기
      .limit(10)
      // 페이지 10개씩 넘어가기
      .skip((page - 1) * 10)
      // 페이지 내용 길이 제한하기
      .lean()
      .exec();
    // 마지막 페이지 번호 알려주기
    const postCount = await Post.countDocuments(query).exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10));
    ctx.body = posts.map(post => ({
      // 내용 길이 200자로 제한
      ...post,
      body:
        post.body.lenght < 200 ? post.body : `${post.body.slice(0, 200)}...`,
    }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 특정 포스트 조회
GET /api/posts/:id
*/
export const read = async ctx => {
  // 미들 웨어를 이용해 코드 간소화
  ctx.body = ctx.state.post;
  // 이전내용
  // const { id } = ctx.params;
  // try {
  //   const post = await Post.findById(id).exec();
  //   if (!post) {
  //     ctx.status = 404; // Not Found
  //     return;
  //   }
  //   ctx.body = post;
  // } catch (e) {
  //   ctx.throw(500, e);
  // }
};

/* 특정 포스트 제거
DELETE /api/posts/:id
*/
export const remove = async ctx => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204; // No content (성공하긴 했지만 응답할 데이터는 없을 경우)
  } catch (e) {
    ctx.throw(500, e);
  }
};

 /* 포스트 수정(교체)
 PUT /api/posts/:id
 { title, body }
 */
// export const replace = ctx => {};

/* 포스트 수정(특정 필드 변경)
PATCH /api/posts/:id
{ title, body }
*/
export const update = async ctx => {
  const { id } = ctx.params;
  // write에서 사용한 schema와 비슷한데, required()가 없습니다.
  const schema = Joi.object().keys({
    title: Joi.string(),
    body: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  // 검증하고 나서 검증 실패인 경우 에러 처리
  const result = schema.validate(ctx.request.body);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }
  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
      // false일 때는 업데이트되기 전의 데이터를 반환합니다.
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/*
  id로 찾은 포스트가 로그인 중인 사용자가 작성한 포스트인지 확인
*/
export const checkOwnPost = (ctx, next) => {
  const { user, post } = ctx.state;
  if (post.user._id.toString() !== user._id ) {
    cts.status = 403;
    return;
  }
  return next();
}