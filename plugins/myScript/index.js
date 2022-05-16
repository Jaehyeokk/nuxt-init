import MyScript from './model.js';

/**
 * 플러그인화
 * @param ctx
 * @param inject
 */

export default ({ app }, inject) => {
  const myScript = new MyScript();
  app.$myScript = myScript;
  inject('myScript', myScript);
};
