import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  console.log(req);
  res.send('About birds');
});

export const about = router;
