const assertNumber = (x: unknown): void => {
  if (typeof x !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }
};

type PowOnFixedBase = (exponent: number) => number;

const curriedPow = (base: number): PowOnFixedBase => {
  assertNumber(base);
  return (exponent) => {
    assertNumber(exponent);
    return base ** exponent;
  };
};

export default function pow(base: number): PowOnFixedBase;
export default function pow(base: number, exponent: number): number;
export default function pow(
  base: number,
  exponent?: number
): number | PowOnFixedBase {
  const powOnFixedBase = curriedPow(base);
  return exponent === undefined ? powOnFixedBase : powOnFixedBase(exponent);
}
