import express from 'express';
import bodyParser from 'body-parser';

import router from './routes.js';
import {resSend} from './utils/index.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(router);

// unregistered route handler
app.use(function(req, res, next) {
    next(resSend(404, 'Not Found', [], res));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    next(resSend(500, 'Server Error', [], res));
  });

const port = parseInt(process.env.port, 10) || 3000;
app.set('port', port);
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});