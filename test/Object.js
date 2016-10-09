import assert from 'assert';
import { transform, code } from './helper';

describe('Object', () => {
  it('should transform Object literal', () => {
    const result = transform('({ a: 1, b: 2, c: 3 });');
    assert(code(result) === 'Immutable.Map({ a: 1, b: 2, c: 3 });');
  });
});
