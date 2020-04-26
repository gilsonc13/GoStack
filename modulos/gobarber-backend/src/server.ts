import 'reflect-metadata';
import express from 'express';
import routes from './routes';

import uploadConfig from './config/upload';

import './database';

const app = express();

app.use(routes);
app.use('/files', express.static(uploadConfig.directoryUpload));

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
