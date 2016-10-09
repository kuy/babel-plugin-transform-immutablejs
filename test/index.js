import assert from 'assert';
import { transform } from 'babel-core';
import plugin from '../src';

function code(result) {
  return result.code.replace("\"use strict\";\n\n", '');
}

describe('babel-plugin-transform-immutablejs', () => {
  it('should rewrite accessing Array element', () => {
    const result = transform('list[1];', {
      presets: ['es2015'],
      plugins: [plugin]
    });

    assert(code(result) === 'list.get(1);');
  });

  it('should rewrite accessing Array element in a function call', () => {
    const result = transform('console.log(list[1]);', {
      presets: ['es2015'],
      plugins: [plugin]
    });

    assert(code(result) === 'console.log(list.get(1));');
  });

  it('should rewrite assigning Array element', () => {
    const result = transform('list[2] = "X";', {
      presets: ['es2015'],
      plugins: [plugin]
    });

    assert(code(result) === 'list.set(2, "X");');
  });

  it('should rewrite Array literal', () => {
    const result = transform('const list = ["A", "B", "C"];', {
      presets: ['es2015'],
      plugins: [plugin]
    });

    assert(code(result) === 'var list = Immutable.List.of("A", "B", "C");');
  });
});
