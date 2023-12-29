const express = require('express');
const app = express();

const AppError = require('./utils/appError');

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log('req header', req.headers);
  //console.log(req.cookies);
  next();
});

// implenent a route handler
// * star here stands for everything
app.all('*', (req, res, next) => {
  // const err = new Error(`cannot find ${req.originalUrl} on this server!`);
  // err.statusCode = 404;
  // next(err);
  next(new AppError(`cannot find ${req.originalUrl} on this server!`, 400));
});
