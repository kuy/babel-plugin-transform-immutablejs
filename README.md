# babel-plugin-transform-immutablejs

Transform built-in collection operations to Immutable.js ones.


## Usage

Too hot, to use :P


## Example

**Before**:
```
const list = ["A", "B", "C"];
list[1] = "X";
console.log(list[1]);
```

**After**:
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


## Development

```
$ npm install
$ npm start
```

### Test (single shot)

```
$ npm test
```


## License

MIT


## Author

Yuki Kodama / [@kuy](https://twitter.com/kuy)
