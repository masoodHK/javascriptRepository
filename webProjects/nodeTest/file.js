const file = require('fs');
const path = require('path');
var fileName = path.join(__dirname, 'testing.txt')
var testFile = file.readFileSync(fileName, 'utf8')
const newLocal = file.writeFileSync;
newLocal('writeMe.txt', testFile)
console.log(testFile)