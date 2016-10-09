import assert from 'assert';
import { transform, code } from './helper';

describe('Array', () => {
  it('should transform Array literal', () => {
    const result = transform('const list = ["A", "B", "C"];');
    assert(code(result) === 'var list = Immutable.List.of("A", "B", "C");');
  });

  it('should transform accessing Array element', () => {
    const result = transform('list[1];');
    assert(code(result) === 'list.get(1);');
  });

  it('should transform accessing Array element in a function call', () => {
    const result = transform('console.log(list[1]);');
    assert(code(result) === 'console.log(list.get(1));');
  });

  it('should transform assigning Array element', () => {
    const result = transform('list[2] = "X";');
    assert(code(result) === 'list.set(2, "X");');
  });

  it('should transform getting length of Array', () => {
    const result = transform('list.length;');
    assert(code(result) === 'list.size;');
  });

  it('should ignore Array#push', () => {
    const result = transform('list.push(10);');
    assert(code(result) === 'list.push(10);');
  });
});
