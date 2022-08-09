const sum = (...nums: number[]): number => {
  if (nums.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  if (nums.some((x) => typeof x !== 'number')) {
    throw new Error('INVALID_ARGUMENT');
  }
  return nums.reduce((acc, x) => acc + x, 0);
};

export default sum;
