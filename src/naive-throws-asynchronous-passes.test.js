async function asyncThrowOrNot(shouldThrow = false) {
  if (shouldThrow) {
    throw new Error('shouldThrow was true');
  }

  return 'success';
}

it('should throw if passed true', async () => {
  try {
    await asyncThrowOrNot(true);
  } catch (error) {
    expect(error).toEqual(new Error('shouldThrow was true'));
  }
});
