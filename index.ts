import express from 'express';
const app: express.Express = express();
import { apiRouter } from './routes/ApiRouter';

app.use('/', apiRouter);

app.listen(8080, () => {
  console.log('start server 8080');
  console.log('hoge');
});
