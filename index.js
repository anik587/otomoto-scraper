import express from 'express';
import bodyParser from 'body-parser';
import {load} from 'cheerio';
import requestPromise from 'request-promise';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const port = parseInt(process.env.port, 10) || 3000;
app.set('port', port);
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});