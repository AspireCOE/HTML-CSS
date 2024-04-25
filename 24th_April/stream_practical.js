const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    const fileStream = fs.createReadStream('./content/async_pattern.txt', 'utf8');
    fileStream.pipe(res);
})
.listen(5000, () => {
    console.log("Listening to the port");
});
