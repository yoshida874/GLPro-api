import express from 'express';
const cors = require('cors');
const app: express.Express = express();
import { apiRouter } from './routes/ApiRouter';

app.use('/', apiRouter);

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.listen(8080, () => {
  console.log('start server 8080');
  console.log('hoge');
});
