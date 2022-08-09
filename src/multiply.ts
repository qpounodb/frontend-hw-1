import { makeAssertNumberFunc } from './lib/assert';

const assertNumber = makeAssertNumberFunc('INVALID_ARGUMENT');

type MultiplyByFixedNum = (b: number) => number;

const multiply = (a: number): MultiplyByFixedNum => {
  assertNumber(a);
  return (b) => {
    assertNumber(b);
    return a * b;
  };
};

export default multiply;
