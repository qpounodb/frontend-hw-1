type CheckType<T> = (x: unknown) => x is T;
type AssertFunc<T> = (x: unknown) => T;
type CustomAssertFunc<T> = (errorMsg: string) => AssertFunc<T>;

function makeAssertFunc<T>(checkType: CheckType<T>): CustomAssertFunc<T> {
  return (errorMsg: string): AssertFunc<T> =>
    (x: unknown): T => {
      if (!checkType(x)) {
        throw new Error(errorMsg);
      }
      return x;
    };
}

type Func = (...args: unknown[]) => unknown;

export const isNumber = (x: unknown): x is number => typeof x === 'number';
export const isString = (x: unknown): x is string => typeof x === 'string';
export const isFunction = (x: unknown): x is Func => typeof x === 'function';
export const isArray = (x: unknown): x is unknown[] => Array.isArray(x);
export const isObject = (x: unknown): x is object =>
  x !== null && !Array.isArray(x) && typeof x === 'object';

export const makeAssertNumberFunc = makeAssertFunc(isNumber);
export const makeAssertStringFunc = makeAssertFunc(isString);
export const makeAssertArrayFunc = makeAssertFunc(isArray);
export const makeAssertObjectFunc = makeAssertFunc(isObject);
export const makeAssertFunctionFunc = makeAssertFunc(isFunction);
