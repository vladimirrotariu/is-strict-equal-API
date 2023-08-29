# isStrictEqual API

## Description
  An API that consists of an implementation of JavaScript's strict equal operator using algebraic&logical properties and native types, and thus extending ```Object.is()```. We do not treat ```null``` and ```undefined```, relegating
  them to handling with ```typeof```.
  * [COMPANION WEBSITE](https://is-strict-equal-api.netlify.app/)


## Tech Stack 
* Web: JavaScript ES2023, HTML5, Bootstrap, Prism.js.
* Testing: Jest (Gherkin Syntax).

## Testing
  A full range of use cases has been tested with Jest; check the [istanbul coverage report](https://is-strict-equal-api.netlify.app/coverage-report/isstrictequal.js).
 

## All classical JavaScript exceptions handled!
Example:
```
NaN === NaN is false
0 === -0 is true
```



