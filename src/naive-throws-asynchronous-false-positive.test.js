function asyncThrowOrNot() {
  return 'success';
}

it('should throw if passed true', async () => {
  try {
    await asyncThrowOrNot(true);
  } catch (error) {
    expect(error).toEqual(new Error('shouldThrow was true'));
  }
});
