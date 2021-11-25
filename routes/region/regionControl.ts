import { Response, Request, Router } from 'express';
import { getRegion } from './regionService';

const router = Router();

/**
 * 地区一覧と地域分類を取得する
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
  const region = await getRegion();
  res.json({ region });
});

export const region = router;
