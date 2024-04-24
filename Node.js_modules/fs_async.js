const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, first) => {
    if (err) {
        return console.log(err);
    }
    console.log(first);
    readFile('./content/second.txt', 'utf-8', (err, second) => {
        if (err) {
            return console.log(err);
        }
        console.log(second);
        const content = `Here is the result: ${first} ${second}`;
        writeFile('./content/result_sync.txt', content,(err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('File written successfully');
            }
        });
    });
});
