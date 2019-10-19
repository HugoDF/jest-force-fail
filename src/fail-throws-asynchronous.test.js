async function asyncThrowOrNot() {
  return 'success';
}

it('should throw if passed true', async () => {
  try {
    await asyncThrowOrNot(true);
    throw new Error("didn't throw");
  } catch (error) {
    expect(error).toEqual(new Error('shouldThrow was true'));
  }
});
