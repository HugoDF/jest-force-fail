async function asyncThrowOrNot() {
  return 'success';
}

it('should throw if passed true', async () => {
  return expect(asyncThrowOrNot(true)).rejects.toEqual(
    new Error('shouldThrow was true')
  );
});
