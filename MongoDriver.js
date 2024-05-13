const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb://127.0.0.1:27017/aspire';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to the MongoDB server
async function connectToMongoDB() {
    try {
        await client.connect();

        const db=client.db('aspire')
        const collection=db.collection('photos')

        const cursor=collection.find();
        // const ackResult= await collection.insertMany([{
        //     "_id":9,title: 'Book 9',
        //     url: 'https://via.placeholder.com/600/56a8c3',
        //     likes: 7,
        //     dislikes: 3
        //     },
        //     {
        //         "_id":10,title: 'Book 10',
        //         url: 'https://via.placeholder.com/600/56a8c3',
        //         likes: 8,
        //         dislikes: 5
        //         },
        //     {
        //         "_id":11,title: 'Book 11',
        //         url: 'https://via.placeholder.com/600/56a8c3',
        //         likes: 13,
        //         dislikes: 14
        //         }
        // ])

        // const result = await collection.updateMany({},{$set:{"Views":15}})
        // console.log("record inserted in into the collection "+ackResult.insertedId);

        const result1 = await collection.updateOne({_id:1},{$set:{"Views":11}})

        await cursor.forEach(record=>{
            console.log(record);
        })
        await client.close()

        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect
connectToMongoDB();