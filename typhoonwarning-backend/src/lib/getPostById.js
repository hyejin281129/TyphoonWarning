// 미들웨어를 만들어 로그인 했을때만 API(CRUD)를 사용할 수 있게 함
const getPostById = (ctx, next) => {
  if (!ctx.state.user) {
    ctx.status = 401; // Unauthorized
    return;
  }
  return next();
};

export default getPostById;
