const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv')


const app = express();

//* Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet());
app.use(morgan("tiny"))
app.use(cors())
dotenv.config();




//* Listening Port
app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
})