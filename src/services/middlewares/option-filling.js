// option filling middleware
// @author Pluto <huarse@gmail.com>
// @create 2019/12/18 20:27

/** add xsrf token add fetch options */
export default async function optionsSupplement (ctx) {
  ctx.type = ctx.type || 'ajax';
  ctx.holdEmptyParam = true;
  // 跨域请求时也带上 cookie
  ctx.credentials = ctx.credentials || 'include';
  await ctx.next();
}
