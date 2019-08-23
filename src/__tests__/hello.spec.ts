import { hello } from '../hello';

describe('hello', () => {
  it('says hello to a name', done => {
    expect(hello('world')).toBe('hello world');
    setTimeout(() => {
      done();
    }, 1000000);
  });
});
