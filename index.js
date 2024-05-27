const kaboom = require("kaplay");
let mod = require("./build/entry.js");

console.log(mod || "No Exports found.");
