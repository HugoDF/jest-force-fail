async function asyncThrowOrNot() {
  return 'success';
}

it('should throw if passed true return expect()', async () => {
  return expect(asyncThrowOrNot(true)).rejects.toEqual(
    new Error('shouldThrow was true')
  );
});

it('should throw if passed true await expect()', async () => {
  await expect(asyncThrowOrNot(true)).rejects.toEqual(
    new Error('shouldThrow was true')
  );
});
