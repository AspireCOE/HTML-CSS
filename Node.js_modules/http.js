const http=require('http')


const server = http.createServer((req,res)=>{
    // res.write("Hello welcome to the server");
    // res.end();

    if(req.url === '/'){
        res.end("This is the home page")
    }
    if(req.url === '/about'){
        res.end("This is the small history")
    }
    res.end(`
        <h1>Oops</h1>
        <p>The site you are trying to reach is unavailable</p>
        <a href='/'>back home <a>
        `
    )
});

server.listen(5000)