<div>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black&labelColor=F7DF1E" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=html5&logoColor=white&labelColor=E34F26" alt="HTML" />
  <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white&labelColor=1572B6" alt="CSS" />
<img src="https://img.shields.io/badge/Jest-C21325?style=flat&logo=jest&logoColor=white&labelColor=C21325" alt="Jest" />
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white&labelColor=F05032" alt="Git" />
<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white&labelColor=2088FF" alt="GitHub Actions" />
</div>

# isStrictEqual API

## Description
  An API that consists of an implementation of JavaScript's strict equal operator using algebraic&logical properties and native types, and thus extending ```Object.is()```. We do not treat ```null``` and ```undefined```, relegating
  them to handling with ```typeof```.
  * [COMPANION WEBSITE](https://is-strict-equal-api.netlify.app/)


## Tech Stack 
* Web: JavaScript ES2023, HTML5, Bootstrap, Prism.js.
* Testing: Jest (Gherkin Syntax).
* CI/CD: GitHub Actions

## Testing
  A full range of use cases has been tested with Jest; check the [istanbul coverage report](https://is-strict-equal-api.netlify.app/coverage-report/isstrictequal.js).
 

## All classical JavaScript exceptions handled!
Example:
```
NaN === NaN is false
0 === -0 is true
```



