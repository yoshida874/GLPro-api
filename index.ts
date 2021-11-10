import express from 'express';
const cors = require('cors');
const app: express.Express = express();
import { apiRouter } from './routes/ApiRouter';

app.use(express.json());

app.use(
  cors({
    origin: '*', // アクセス許可するオリジン
    credentials: true, // レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, // レスポンスstatusを200に設定
  })
);

app.use('/', apiRouter);

app.listen(8080, () => {
  console.log('start server 8080');
  console.log('hoge');
});
