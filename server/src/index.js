const express = require('express');
const cors = require('cors');
const { isEmpty } = require('lodash');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const app = express();
const port = 5000;
const url = process.env.MONGODB_URI;

const connectDatabase = async (req, res, next) => {

    try{
        const client = await MongoClient.connect(url);

        if (isEmpty(client)) {
            res.send("Database not connected")
        }

        global.nativeclient = client;
        console.log("Database Connected")
        next();
    }
     catch(error) {
        res.send("Database not connected")
    }
}

app.use(cors());
app.use(connectDatabase)

app.get('/', async (req, res) => {   
    const moviesCollection = nativeclient.db("mock").collection("moviesCollection");
    const moviesData = await moviesCollection.find().toArray();
    console.log(moviesData)
    return res.send(moviesData);
});

app.listen(port, () => {
    console.log(`Listening at port at ${port}`);
})