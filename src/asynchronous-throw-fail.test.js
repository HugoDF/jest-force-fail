it('should not top-level throw', async () => {
  throw new Error('it threw');
});
it('should not throw on Promise rejection', async () => {
  await Promise.reject(new Error('Promise rejection'));
});
it('should not throw on async function throw', async () => {
  const throws = async () => {
    throw new Error('async-function throw');
  };

  await throws();
});
