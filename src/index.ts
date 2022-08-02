import { clone } from 'lodash';

export function cloneData(s: string): string {
  return clone(s);
}

console.log(`Hello`);