const kaboom = require('kaboom')
let mod = require('./build/entry.js')

console.log(mod || 'No Exports found.')