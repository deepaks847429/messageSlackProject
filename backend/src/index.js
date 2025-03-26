import express from 'express';
import { StatusCodes } from 'http-status-code';

import connectDB from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';

const app = express();
app.use(express.json());
app.get('/ping', (req, res) => {
  return res.status(StatusCodes.ok).json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log('server is runnning on port ' + PORT);
  connectDB();
});
