const { log } = require("node:console");
const path = require("path");

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename));
console.log(path.format(path.parse(__filename))); // original path of th file

console.log(path.isAbsolute(__filename));

console.log(path.join("forder1","folder2","index.html"));

console.log(path.resolve("forder1","folder2","index.html"));