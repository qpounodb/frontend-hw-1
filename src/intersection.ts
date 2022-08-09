function assertArray<T>(x: unknown): T[] {
  if (!Array.isArray(x)) {
    throw new Error('INVALID_ARGUMENT');
  }
  return x;
}

function assertNumber(x: unknown): number {
  if (typeof x !== 'number') {
    throw new Error('INVALID_ELEMENT_IN_ARRAY');
  }
  return x;
}

const intersection = (...args: [xs: number[], ys: number[]]): number[] => {
  if (args.length !== 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  const set = new Set(args.map(assertArray).flat().map(assertNumber));
  const [xs, ys] = args;
  return Array.from(set).filter((x) => xs.includes(x) && ys.includes(x));
};

export default intersection;
