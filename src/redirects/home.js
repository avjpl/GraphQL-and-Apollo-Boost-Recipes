export const home = watch => {

  if (!fn in []) throw new Error('Invalid array function');

  return {
    watch,
    redirect: '/',
    cb: v => Boolean(v),
    fn: 'some'
  }
};
