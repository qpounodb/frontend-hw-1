import { makeAssertArrayFunc, makeAssertStringFunc } from './lib/assert';

const assertString = makeAssertStringFunc('INVALID_ELEMENT_IN_ARRAY');
const assertArray = makeAssertArrayFunc('INVALID_ARGUMENT');

type Meta = {
  str: string;
  count: number;
};

const normilize = (str: string): string => str.split('').sort().join('');

const removeAnagrams = (strings: string[]): string[] => {
  const metaMap = assertArray(strings)
    .map(assertString)
    .reduce((map, str) => {
      const norm = normilize(str);
      const meta = map.get(norm) ?? { str, count: 0 };
      meta.count += 1;
      map.set(norm, meta);
      return map;
    }, new Map<string, Meta>());

  return Array.from(metaMap.values())
    .filter((meta) => meta.count === 1)
    .map(({ str }) => str);
};

export default removeAnagrams;
