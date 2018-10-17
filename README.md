# util-boolean-parse

## Install
```bash
npm i --save @kldit/util-boolean-parse
```

## Usage
Load at the begining of your application.
```javascript
require("@kldit/util-boolean-parse");
```
Run at any where of your code.
```javascript
Boolean.parse("true") // true
Boolean.parse("false") // false
Boolean.parse("1") // true
Boolean.parse("0") // false
Boolean.parse("afdasd") // undefined
```
