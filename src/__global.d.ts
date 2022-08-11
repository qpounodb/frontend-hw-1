export {};

declare global {
  interface Array<T> extends ArrayPatch<T> {}

  interface ArrayPatch<T> {
    count(this: T[]): number;
    insert(this: T[], index: number, value: T): T[];
    remove(this: T[], value: T): T[];
  }
}
