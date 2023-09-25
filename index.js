import express from 'express';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';
import router from './routes.js';
import {resSend} from './utils/index.js';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use((req, res, next) => {
  req.retry_counter = 0;
  req.max_retry = process.env.MAX_RETRY;
  req.env = process.env.NODE_ENV;
  next();
},router);

// unregistered route handler
app.use((req, res, next) => {
    next(resSend(404, 'Not Found', [], res));
  });
  
  // error handler
  app.use((err, req, res, next) => {
    next(resSend(500, 'Server Error', [], res));
  });

const port = parseInt(process.env.port, 10) || 3000;
app.set('port', port);
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});