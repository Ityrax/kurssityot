var fs = require('fs');

fs.appendFile('uusi.txt', 'Hello taas sisältönä!', function (err) {
if (err) throw err;
console.log('Tallessa!');
});