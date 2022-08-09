import { makeAssertNumberFunc } from './lib/assert';

const assertNumber = makeAssertNumberFunc('INVALID_ARGUMENT');

const patchArrays = (): void => {
  Object.assign(Array.prototype, {
    count<T>(this: T[]): number {
      return this.length;
    },

    insert<T>(this: T[], index: number, value: T): T[] {
      this.splice(assertNumber(index) < 0 ? 0 : index, 0, value);
      return this;
    },

    remove<T>(this: T[], value: T): T[] {
      const index = this.indexOf(value);
      if (index > -1) {
        this.splice(index, 1);
      }
      return this;
    },
  });
};

export default patchArrays;
