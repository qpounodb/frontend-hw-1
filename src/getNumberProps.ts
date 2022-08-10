import { isNumber, isObject, makeAssertObjectFunc } from './lib/assert';

const assertObject = makeAssertObjectFunc('INVALID_ARGUMENT');

const recGetNumberProps = (obj: object): string[] =>
  Object.entries(obj)
    .filter(([k, v]) => isNumber(v) || isObject(v))
    .flatMap(([k, v]) => (isObject(v) ? recGetNumberProps(v) : [k]))
    .sort();

const getNumberProps = (obj: object): string[] => {
  return recGetNumberProps(assertObject(obj));
};

export default getNumberProps;
