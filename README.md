# priority-split

Recursively splits a string using provided patterns (in the order they're provided) into chunks of the given max size.

### Install
```bash
yarn add priority-split
```

### Use
```js
const prioritySplit = require("priority-split");
const phrase = "abc.de.fgh,i!j";
console.log( prioritySplit(phrase, 3, /[.]/, ",", "!") )
// => ["abc", "de", "fgh", "i!j"]
```

Notice that the string was not split on the `"!"` pattern, as the other patterns have already cut it down to size.

### License

MIT