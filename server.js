const express = require('express');
const connectDB = require('./config/db')
const path = require('path')

const app = express();

// connect database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
   
});

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

    // Set static folder   
    // All the javascript and css files will be read and served from this folder
    app.use(express.static("client/build"));
  
    // index.html for all page routes    html or routing and naviagtion
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client","build","index.html"));
    });
  }
  


const port = process.env.PORT || 5000;

app.listen( port, () => { console.log(`Server is running on port ${port}`)});