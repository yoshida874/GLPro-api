import express from 'express';
const app: express.Express = express();
import router from './routes/apiroute';

app.use('/', router);

app.listen(8080, () => {
  console.log('start server 8080');
  console.log('hoge');
});
