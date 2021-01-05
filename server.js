const express = require('express');
const connectDB = require('./config/db')

const app = express();

// connect database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
    res.send({ msg: 'Welcome to the contact api' })
});

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));


const port = process.env.PORT || 5000;

app.listen( port, () => { console.log(`Server is running on port ${port}`)});