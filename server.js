require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const path = require('path')

const app = express();
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))

//routes
app.use(express.json({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.get('/', (req,res) => res.json({msg: 'Welcome to the Courzelo API'}));
app.use('/user', require('./routes/userRouter'))
app.use('/course', require('./routes/courseRouter'))
app.use('/api', require('./routes/upload'))

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb")
})

const PORT = process.env.PORT || 6000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));