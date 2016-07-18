## Employee Search service library
This is a java script (micro) library published in [npm](https://www.npmjs.com) (MIT). This will allow to
    search Employees(stored in a json file) through a simple public API.
    During the process exercised create the javascript library, setup the github repo, publish the module to npm, setup
    the test suite with code coverage reporting using Karma, Mocha and Chai,
    add continuous integration, add ES6 (ES2015) with Babel, configure webpack, distribute the library as public
    (Isomorphic Javascript) module (consumable by both the browser and node)

## Contents :

#### ES6-exercise
```
    ├───.gitignore
    ├───.travis.yml
    ├───GUIDE.md
    ├───package.json
    ├───README.md
    ├───node_modules
    │   ├───.bin
    │   ├───chai
    │   ├───commitizen
    │   ├───cz-conventional-changelog
    │   ├───ghooks
    │   ├───mocha
    │   └───unique-random-array
    └───src
    ├───employees.json
    ├───index.js
    └───index.test.js
```

## Dependency libraries (npm i -s / npm install --save)
    * unique-random-array -- For array manipulations
    * mocha chai -- Unit testing
    * semantic-release-cli -- Continuous integration and release management
    * commitizen -- Manage commits with git standards
    * cz-conventional-changelog -- Dependency for commitizen which handle change logs
    * ghooks -- A git hook, which used in this project to force passing tests before commits


## Basic steps followed
    * Setting up a github account and repository
    * Setting up a npm account and configure projects
    * Build the library
    * push to github / npm
    * Release new (major/minor/beta) version
    * Unit tests with Mocha and Chai
    * Automatic release with Semantic-release
    * Manage commits with commitizen and ghooks
    * Release automation with TravisCI
    * Continue...


## To use this library :
> npm install search-emplyee

    ### Then call the public methods 
        * all -- Return all employees
        * random -- Returns a random Employee
        * random(number) -- Return specific number of random employees

> This exercise totally inspired by [Introduction to 'How to Write an Open Source JavaScript Library'](https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-introduction) - Kent C. Dodds
