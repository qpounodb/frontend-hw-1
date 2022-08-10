import { makeAssertFunctionFunc, makeAssertNumberFunc } from './lib/assert';

const assertFunction = makeAssertFunctionFunc('INVALID_ARGUMENT');
const assertNumber = makeAssertNumberFunc('INVALID_ARGUMENT');

const planEvent = <T>(cb: () => T, timeout = 0): Promise<T> => {
  assertFunction(cb) && assertNumber(timeout);
  return new Promise((resolve) => setTimeout(() => resolve(cb()), timeout));
};

export default planEvent;
