# task4-calculator (Command Patern)
Application contains:
Webpack bundler, eslint, prettier, husky(pre-commit hook), jest tests

How to run app:
1. npm install (install all folder and packages)
2. npm test (run jest tests)
3. npm run build (build webpack with prettier and eslint)
4. npm start (starting a server on port http://localhost:3000/)

Folders Structure:

Mathematical operations with command pattern
/command
/binaryOperations (on two value)
/memoryOperations (storage values)
/unaryOperation
/core
/calculator (main class that storaging values and execute commands)
/test (jest test for math classes)
/utils (Math operations)

/index.js (main logic)
