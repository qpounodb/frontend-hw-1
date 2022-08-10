import { makeAssertStringFunc } from './lib/assert';

const assertStirng = makeAssertStringFunc('INVALID_ARGUMENT');

const sort = (str: string) => {
  return assertStirng(str)
    .toLowerCase()
    .split(' ')
    .sort((a, b) => a.length - b.length)
    .map((word) => word.split('').sort().join(''))
    .join(' ');
};

export default sort;
