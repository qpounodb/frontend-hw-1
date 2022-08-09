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

export const makeAssertNumberFunc = makeAssertFunc(
  (x): x is number => typeof x === 'number'
);

export const makeAssertArrayFunc = makeAssertFunc((x): x is unknown[] =>
  Array.isArray(x)
);
