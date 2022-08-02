import { cloneData } from '../src';

describe(`#cloneData`, () => {
  it(`works`, () => {
    const x = `hello`;
    const y = cloneData(x);
    expect(x).toEqual(y);
  });
});
