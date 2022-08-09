import { makeAssertNumberFunc } from './lib/assert';

const assertNumber = makeAssertNumberFunc('INVALID_ARGUMENT');

const sum = (...nums: number[]): number => {
  if (nums.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  return nums.map(assertNumber).reduce((acc, x) => acc + x, 0);
};

export default sum;
