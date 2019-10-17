function throwOrNot() {
  return 'success';
}

it('should throw if passed true', () => {
  expect(throwOrNot.bind(null, true)).toThrow(
    new Error('shouldThrow was true')
  );
});
