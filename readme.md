# Stryker JS

Demo project to demonstrate the usefullness of Mutation Tests

## Execution
- Uncomment the correct test set and comment the rest
- Execute 'npx jest --coverage' to see the test results and their coverage
- Execute 'stryker run', to start mutation tests

## Information
The .test.js contains 3 blocks of code:
- First block is often implemented by devs who just want some passing tests. The reality is that these tests will be a little more elaborate than just a blind assert.
- Second block contains a test set that has 100% coverage (Stmts, Branch, Funcs, Lines), but do not test all important cases.
- Third block contains a test set that should cover everything.