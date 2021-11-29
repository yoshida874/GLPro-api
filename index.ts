import express, { Response as ExResponse, Request as ExRequest } from 'express';
const cors = require('cors');
const app: express.Express = express();
// import { apiRouter } from './routes/ApiRouter';
import { RegisterRoutes } from './build/routes';
import swaggerUi from 'swagger-ui-express';

app.use(express.json());

app.use(
  cors({
    origin: '*', // アクセス許可するオリジン
    credentials: true, // レスポンスヘッダーにAccess-Control-Allow-Credentials追加
    optionsSuccessStatus: 200, // レスポンスstatusを200に設定
  })
);

RegisterRoutes(app);
app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(await import('./build/swagger.json')));
});
// app.use('/', apiRouter);

app.listen(8080, () => {
  console.log('start server 8080');
  console.log('hoge');
});
