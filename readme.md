## README.md
### Calculator Module
This module provides basic arithmetic multiplication table of any number (a) provided by you till the number (b).
### Import in your project by command 
const tableOf = require('tableof');
#### Functionality:
- **tableof(a, b):** Accepts number `a` whose table is to print till number `b` and returns the result.

#### Usage:
```javascript
const table = require('tableof');
console.log(tableof(5, 3)); // Output: 5X0=0, 5X1=5, 5X2=10, 5X3=15
console.log(tableof(10, 4)); // Output: 10x0=0, 10x1=10, 10x2=20, 10x3=30, 10x4=40
