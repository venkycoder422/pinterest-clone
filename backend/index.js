const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./database/index');
const { registerUser, login } = require('./handlers/handler');
const { createPin, sendPins, individualPin, createComment, search, createdPosts } = require('./handlers/pinhandlers');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend/build')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build'));
    
})

app.get('/', (req, res) => {
    res.send("API Running")
})

app.get('/pins', sendPins)
app.post('/individualpin', individualPin)
app.post('/createpin', createPin)
app.post('/register', registerUser)
app.post('/login', login)
app.patch("/createComment", createComment)
app.get("/search", search)
app.get("/created", createdPosts)
connectDB()
app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})




