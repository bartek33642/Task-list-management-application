import bodyParser from 'body-parser';
import config from './config';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
// import routes from './REST/routes';
import mongoose from 'mongoose';

// Instancja serwera
const app = express();
app.use(express.static(__dirname + '/public'));

// middleware (funkcje) developerskie
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({limit: '2048kb'}));

// cors - mechanizm umożliwiający współdzielenie zasobów pomiędzy serwerami znajdującymi się w różnych domenach
app.use(cors());

try {
    mongoose.connect(config.databaseUrl)
    console.log('Mongo connected')
 } catch (error) {
    console.log(error)
    process.exit()
 }
 
 process.on('SIGINT', () => {
    mongoose.connection.close();
    console.error('Mongoose default connection disconnected through app termination');
    process.exit(0);
 });
 
 
// routes(app);

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// uruchomienie serwera
app.listen(config.port, function () {
  console.info(`Server is running at ${config.port}`)
});