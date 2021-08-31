/* eslint-disable no-restricted-globals */
// error handler middleware
// @author Pluto <huarse@gmail.com>
// @create 2019/12/18 20:07

import { message } from 'antd';
import { logger } from '@irim/saber';

import CustomError from '@/common/custom-error';
import { gotoLogin } from '@/common/container';

/**
 * 统一错误处理
 * @param {boolean|string} [ctx.showError=true] 显示错误信息
 * @param {boolean} ctx.ignoreError 忽略错误，并返回
 */
export default async function errorHandler(ctx) {
  try {
    await ctx.next();

    const response = ctx.response || {};
    if (response.success) return;
    const code = 'code' in response && `${response.code}`;
    // 未登录 & 已登录但用户信息不正确 直接跳转登录页面
    if (code === '10000' || code === '10080') {
      throw new CustomError(response.msg || response.result || response.r || response.rs, code);
    } else if (code === '302' || code === '11000') {
      // debugger;
      gotoLogin();
      throw new CustomError(
        response.msg || response.errMsg || response.errorMsg || '网络错误',
        code,
      );
    } else if (response.success === false || (code !== '0' && code !== '200')) {
      throw new CustomError(
        response.msg || response.errMsg || response.errorMsg || '网络错误',
        code,
      );
    }
  } catch (error) {
    if (error.code === 'NEED_LOGIN') {
      const current = (location.hash || '').replace(/^#/, '');
      location.hash = `#/login?redirect=${encodeURIComponent(current)}`;
      throw error;
    }
    if (ctx.showError !== false) {
      const defaultMessage =
        typeof ctx.showError === 'string' ? ctx.showError : '请求异常，请稍后再试。';
      message.config({
        prefixCls: 'nbugs-container-message',
      });

      message.error({
        content: error.message || defaultMessage,
      });

      logger.error(error.message || defaultMessage);
    }

    if (ctx.ignoreError) {
      logger.warning(`ERROR ignored: ${ctx.api}`, error);
      ctx.body = error || {};
    } else {
      throw error;
    }
  }
}
