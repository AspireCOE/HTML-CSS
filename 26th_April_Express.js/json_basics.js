const express = require('express');
const app=express();

app.get('/',(req,res)=>{
    res.json([{name:'James'},{name:'Glory'}]);
})


app.listen(4000,()=>{
    console.log('Server is listening to the port');
})