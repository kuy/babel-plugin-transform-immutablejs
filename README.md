[![NPM Package][npm_img]][npm_site]
[![Travis][ci_img]][ci_site]
[![Dependency Status][david_img]][david_site]

# babel-plugin-transform-immutablejs

Transform built-in collection operations to [Immutable.js](https://facebook.github.io/immutable-js/) ones.


## Usage

Too hot 🔥, to use 😵


## Example

Before:
```
const list = ["A", "B", "C"];
list[1] = "X";
console.log(list[1]);
```

After:
```
const list = Immutable.List.of("A", "B", "C");
list.set(1, "X");
console.log(list.get(1));
```


## Supported operations

### Array

- [x] `[0, 1, 2]` (Array literal)
- [x] `array[1]` (accessing Array element)
- [x] `array[1] = 10` (assignment of Array element)

### Object

- [ ] `{ a: 0, b: 1, c: 2 }` (Object literal)
- [ ] `obj['a']` (accessing Object member)
- [ ] `obj['a'] = 10` (assignment of Object member)

### ... and more


## Development

```
$ npm install
$ npm start
```

### Run test

```
$ npm test
```


## License

MIT


## Author

Yuki Kodama / [@kuy](https://twitter.com/kuy)


[npm_img]: https://img.shields.io/npm/v/babel-plugin-transform-immutablejs.svg
[npm_site]: https://www.npmjs.org/package/babel-plugin-transform-immutablejs
[ci_img]: https://img.shields.io/travis/kuy/babel-plugin-transform-immutablejs/master.svg?style=flat-square
[ci_site]: https://travis-ci.org/kuy/babel-plugin-transform-immutablejs
[david_img]: https://img.shields.io/david/kuy/babel-plugin-transform-immutablejs.svg
[david_site]: https://david-dm.org/kuy/babel-plugin-transform-immutablejs
