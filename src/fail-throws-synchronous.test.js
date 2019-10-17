function throwOrNot() {
  return 'success';
}

it('should throw if passed true', () => {
  try {
    throwOrNot(true);
    throw new Error("didn't throw");
  } catch (error) {
    expect(error).toEqual(new Error('shouldThrow was true'));
  }
});
