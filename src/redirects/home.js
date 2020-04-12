export const home = (watch, fn) => {

  if (fn && !fn in []) throw new Error('Invalid array function');

  return {
    watch,
    redirect: '/',
    cb: v => Boolean(v),
    fn
  }
};
