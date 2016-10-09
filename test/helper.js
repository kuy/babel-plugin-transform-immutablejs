import { transform as babelTransform } from 'babel-core';
import plugin from '../src';

export function transform(code) {
  return babelTransform(code, {
    presets: ['es2015'],
    plugins: [plugin]
  });
}

export function code(result) {
  return result.code.replace("\"use strict\";\n\n", '');
}
