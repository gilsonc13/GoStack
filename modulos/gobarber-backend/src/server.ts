import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import routes from './routes';

import uploadConfig from './config/upload';
import AppError from './errors/AppError';

import './database';

const app = express();

app.use(routes);
app.use('/files', express.static(uploadConfig.directoryUpload));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal server erro' });
});

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
