# Database Interacation in Web Applications

This demonstrates the cconnection of MySQL database and Node.js to create a simple API

## Requirements
- [Node.js](https://nodejs.org/) installed
-  MySQL installed and running
-  A code editor, like [Visual Studio Code](https://code.visualstudio.com/download)

## Setup
1. Clone the repository
2. Initialize the node.js environment
   ```
   npm init -y
   ```
3. Install the necessary dependancies
   ```
   npm install express mysql2 dotenv nodemon
   ```
4. Create a ``` server.js ``` and ```.env``` files
5. Basic ```server.js``` setup
   <br>
   
   ```js
   const express = require('express')
   const app = express()

   
   // Question 1 goes here
   const path = require('path');
   app.set('views', path.join(__dirname, 'views'));  // Ensure the correct path to your views folder
   app.set('view engine', 'ejs');  // Use the correct templating engine

   // Retrieve from Database
   app.get('/get-patients', (req, res) =>{
      const getPatients = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients"
      db.query(getPatients, (err, patientsTable) => {
         // if I have an error
         if(err) {
               return res.status(400).send("Failed to get patients details", err)
         }
         // I there is no error
         // res.status(200).send(data)

         // because of ejs, we change send to render
         res.status(200).render('patientsTable', { patientsTable })
      

      })
   })


   // Question 2 goes here
   const path = require('path');
   app.set('views', path.join(__dirname, 'views'));  // Ensure the correct path to your views folder
   app.set('view engine', 'ejs');  // Use the correct templating engine

   // Retrieve from Database
   app.get('/get-providers', (req, res) =>{
      const getPatients = "SELECT first_name, last_name, provider_specialty FROM providers"
      db.query(getPatients, (err, patientsTable) => {
         // if I have an error
         if(err) {
               return res.status(400).send("Failed to get provider's Name and specialty", err)
         }
         // I there is no error
         // res.status(200).send(data)

         // because of ejs, we change send to render
         res.status(200).render('patientsTable', { patientsTable })
      

      })
   })

   // Question 3 goes here
   const path = require('path');
   app.set('views', path.join(__dirname, 'views'));  // Ensure the correct path to your views folder
   app.set('view engine', 'ejs');  // Use the correct templating engine

   // Retrieve from Database
   app.get('/get-patients', (req, res) =>{
      const getPatients = "SELECT first_name FROM patients"
      db.query(getPatients, (err, patientsTable) => {
         // if I have an error
         if(err) {
               return res.status(400).send("Failed to get patients first name", err)
         }
         // I there is no error
         // res.status(200).send(data)

         // because of ejs, we change send to render
         res.status(200).render('patientsTable', { patientsTable })
      

      })
   })

   // Question 4 goes here
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
   

   // listen to the server
   const PORT = 3000
   app.listen(PORT, () => {
     console.log(`server is runnig on http://localhost:${PORT}`)
   })
   ```
<br><br>

## Run the server
   ```
   nodemon server.js
   ```
<br><br>

## Setup the ```.env``` file
```.env
DB_USERNAME=root
DB_HOST=localhost
DB_PASSWORD=your_password
DB_NAME=hospital_db
```

<br><br>

## Configure the database connection and test the connection
Configure the ```server.js``` file to access the credentials in the ```.env``` to use them in the database connection

<br>

## 1. Retrieve all patients
Create a ```GET``` endpoint that retrieves all patients and displays their:
- ```patient_id```
- ```first_name```
- ```last_name```
- ```date_of_birth```

<br>

## 2. Retrieve all providers
Create a ```GET``` endpoint that displays all providers with their:
- ```first_name```
- ```last_name```
- ```provider_specialty```

<br>

## 3. Filter patients by First Name
Create a ```GET``` endpoint that retrieves all patients by their first name

<br>

## 4. Retrieve all providers by their specialty
Create a ```GET``` endpoint that retrieves all providers by their specialty

<br>


## NOTE: Do not fork this repository
