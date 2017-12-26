const file = require('fs');
const path = require('path');
var fileName = path.join(__dirname, 'testing.txt')
var testFile = file.readFileSync(fileName, 'utf8')
file.writeFileSync('writeMe.txt', testFile)
Console.log(testFile)