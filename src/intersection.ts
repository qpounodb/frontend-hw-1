import { makeAssertArrayFunc, makeAssertNumberFunc } from './lib/assert';

const assertNumber = makeAssertNumberFunc('INVALID_ELEMENT_IN_ARRAY');
const assertArray = makeAssertArrayFunc('INVALID_ARGUMENT');

const intersection = (...args: [xs: number[], ys: number[]]): number[] => {
  if (args.length !== 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  const set = new Set(args.map(assertArray).flat().map(assertNumber));
  const [xs, ys] = args;
  return Array.from(set).filter((x) => xs.includes(x) && ys.includes(x));
};

export default intersection;
