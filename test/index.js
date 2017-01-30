import { expect } from 'chai';

const aPromise = () => Promise.resolve(42);

describe('sample test', () => {
  it('should work with es6 async/await', async () => {
    const res = await aPromise();
    expect(res).to.equal(42);
  });
});
