function throwOrNot() {
  return 'success';
}

it('should throw if passed true', () => {
  try {
    throwOrNot(true);
  } catch (error) {
    expect(error).toEqual(new Error('shouldThrow was true'));
  }
});
