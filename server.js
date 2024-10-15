// impo our dependencies 
const express = require("express")
const app = express()
const mysql = require('mysql2');
const dotenv = require('dotenv')

// cors ejs

// configure environment variables
dotenv.config();

// create a connection object 
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// text the connection
db.connect((err) => {
    // if the connection is not successful
    if(err) {
        return console.log("Error connecting to the database: ", err)
    }

    // connection is succefful
    console.log("Successfully connected to MySQL: ", db.threadId)
})

// basic endpoint to say Hello world //
// app.get('', (req, res) => {
//     res.send("Hello World, Jude is writin some code, and Nodemon is running")
// })

// ejs => This is not important for the assignment
const path = require('path');
app.set('views', path.join(__dirname, 'views'));  // Ensure the correct path to your views folder
app.set('view engine', 'ejs');  // Use the correct templating engine

// Retrieve from Database
app.get('/get-providers', (req, res) =>{
    const getPatients = "SELECT provider_specialty FROM providers"
    db.query(getPatients, (err, patientsTable) => {
        // if I have an error
        if(err) {
            return res.status(400).send("Failed to get provider's specialty", err)
        }
        // I there is no error
        // res.status(200).send(data)

        // because of ejs, we change send to render
        res.status(200).render('patientsTable', { patientsTable })
    

    })
})


// start and listen to the server
app.listen(3300, () => {
    console.log(`server is running on port 3300...`)
})