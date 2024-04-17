import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

import db from './db/index';

config();

const app = express();
const PORT = process.env.PORT || 1337;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));

try {
  app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Api is working' });
  });

  db.connect();

  app.listen(PORT, () => {
    console.log(`app is up and running on port ${PORT}`);
  });
} catch (err) {
  console.log(err.message);
}
