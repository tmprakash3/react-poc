
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config';
import Middlewares from './api/middlewares';
import Authentication from './api/authentication';
import UserRouter from './user/router';
import OrderRouter from './order/router';

if (!process.env.JWT_SECRET) {
    const err = new Error('No JWT_SECRET in env variable, check instructions: https://github.com/amazingandyyy/mern#0a6b944d-d2fb-46fc-a85e-0295c986cd9f');
    console.error(err);
}

const app = express();
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    sslValidate: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 300000, // Close sockets after 45 seconds of inactivity
    dbName: 'interflora'
};
mongoose.connect(config.mongoose.uri, options)
mongoose.connection.on('connected', () => console.log('mongodb cluster connected...'));
mongoose.connection.on('error', (e) => console.log(e.message));

//mongoose.Promise = global.Promise;

// App Setup
app.use(cors({
    origin: ['https://www.amazingandyyy.com', 'http://localhost:3000']
}));
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/ping', (req, res) => res.send('pong'));
app.get('/', (req, res) => res.json({ 'source': 'https://github.com/amazingandyyy/mern' }));
app.post('/signup', Authentication.signup);
app.post('/signin', Authentication.signin);
app.get('/auth-ping', Middlewares.loginRequired, (req, res) => res.send('connected'));
app.use('/user', Middlewares.loginRequired, UserRouter);
app.use('/orders', OrderRouter)

app.use((err, req, res, next) => {
    console.log('Error:', err.message);
    res.status(422).json(err.message);
});

// Server Setup
const port = process.env.PORT || 8000
http.createServer(app).listen(port, () => {
    console.log(`\x1b[32m`, `Server listening on: ${port}`, `\x1b[0m`)
});
