import Assert from 'assert';
import { add } from '.';

describe('add', () => {
  it('should add integers correctly', () => {
    Assert.strictEqual(
      add(3, 4),
      7
    );
  });
});
