var mongoose=require('mongoose')

var schema=mongoose.Schema;


var skillSchema=new schema({
    skillName:String,
    experience:Number,
    proficiency:String
})

var jobSeekerSchema=new schema({
    Name:String,
    emailId:String,
    age:Number,
    certified:Boolean,
    skills:[skillSchema]
})

var jobSeeker=mongoose.model('jobseeker',jobSeekerSchema)
mongoose.connect("mongodb://127.0.0.1:27017/employee")


// var jobseeker1=new jobSeeker({
//     Name:"Janani",
//     age:21,
//     emailId:"plpriya07@gmail.com",
//     certified:true,
//     skills:[{skillName:"java",experience:3,proficiency:"intermediate"},
//         {skillName:"JS",experience:2,proficiency:"beginner"}
//     ]
// })
// jobseeker1.save();
jobSeeker.findOneAndUpdate({Name:"Janani"},{age:22},{new:true})
jobSeeker.find({"skills.experience":{$lte:2}})
    .then((data) => {
        console.log("Data retrieved successfully:", data);
    })
    .catch((err) => {
        console.error("Error in retrieving the data:", err);
    });



// const result = await jobSeeker.find({"skills.experience":{$lte:2}})
// result.map(record => console.log(record))
// Define an asynchronous function
let result = async () => {
    try {
        const results = await jobSeeker.find({ "skills.experience": { $lte: 2 } });
        results.forEach(record => console.log(record));
    } catch (error) {
        console.error("Error retrieving job seeker records:", error);
    }
};

// Call the asynchronous function to execute it
result(); // This will actually execute the function


