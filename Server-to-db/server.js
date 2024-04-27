const express= require("express");
const bodyParser= require("body-parser");
const app= express();
const axios=require('axios');
const port=5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.post('/submit',(req,res)=>{
    const{username, password, mobile, email} = req.body;
    const userdata={
        username,
        password,
        mobile,
        email
    }
   //console.log(userdata);

   axios.post("http://localhost:3000/users", userdata)
  .then(data => {
    res.send("User data saved successfully");
  })
  .catch(err => {
    console.log("Error in saving the data:", err);
  });
});

app.get('/getuser',(req,res)=>{
  axios.get('http://localhost:3000/users').then(dbdata =>{
  res.send(dbdata.data);
  })
  .catch(err =>{
  console.log(err);
  })
});

app.post('/changePassword',(req,res)=>{
  const{id,pass}=req.body;
  const password={
      pass
  }
 
  console.log(password);

  axios.patch(`http://localhost:3000/users/${id}`,password).then(dbresponse=>{
      res.send("password updated")
  }).catch(err=>console.log(err))

})




app.listen(port,()=>{
    console.log(`Server is listening to the port ${port}`);
});