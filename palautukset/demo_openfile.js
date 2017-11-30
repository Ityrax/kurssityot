var fs = require('fs');

fs.open('uusi2.txt', 'w', function (err, file) {
if (err) throw err;
console.log('Tallessa!');
});