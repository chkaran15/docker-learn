const express = require('express');
const mongoose = require('mongoose');
const { captureRejectionSymbol } = require('node:events');
const {exec} = required('child_process');

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/mydatabse', {useNewUrlParser:true,useUnifiedTopology:true})

const db = mongoose.connection;
db.on('error', console.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// Docker Compose UP
const startContainers = ()=> {
    exec('docker-compose up -d', (error, stdout, stderr) => {
        if(error) {
            console.error(`Error starting container ${error.message}`);
            return;
        }
        console.log(`Container started successfully:\n${stdout}`)
    })
}

// Express route to start containers

app.get('/start-containers', (req,res) => {
    startContainers();
    res.send("Container are starting...");
});


// Express route to check if containers are running 
app.get('/check-containers', (req,res) => {
    exec('docker ps', (error, stdout, stderr) => {
        if(error){
            console.error(`Error checking containers: ${error.message}`);
            res.send(`Error checking containers`);
            return;
        }

        res.send(`Containers running:\n${stdout}`);
    })
})

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running in http://localhost"${PORT}`)
})