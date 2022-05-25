require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan')
const session = require('express-session')
const cors = require('cors');

const dbConnection = require('./config/db')

const MongoStore = require('connect-mongo')

const passport = require('./config/passport');
const app = express();

app.use(morgan('dev'));
app.use(cors());

// app.use(cors({
//     origin: 'localhost:5000'
// }))


app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json()); 

app.use(
    session({
        secret: 'story book',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI
        })
    })
);

app.use(passport.initialize())

app.use(passport.session())

const user = require('./routes/user');
const station = require('./routes/station');
app.use('/user', user)
app.use('/station', station);

const PORT = 8080
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT} `)
})