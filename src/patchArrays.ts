import { makeAssertNumberFunc } from './lib/assert';

const patchArrays = (): void =>
  void Object.assign(Array.prototype, getArrayPatch());

export default patchArrays;

function getArrayPatch<T = unknown>(): ArrayPatch<T> {
  const assertNumber = makeAssertNumberFunc('INVALID_ARGUMENT');

  return {
    count(this: T[]): number {
      return this.length;
    },

    insert(this: T[], index: number, value: T): T[] {
      this.splice(assertNumber(index) < 0 ? 0 : index, 0, value);
      return this;
    },

    remove(this: T[], value: T): T[] {
      const index = this.indexOf(value);
      if (index > -1) {
        this.splice(index, 1);
      }
      return this;
    },
  };
}
