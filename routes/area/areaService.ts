import { Response, Request, Router } from 'express';

import { getArea, getAreaDetail } from './areaControl';
const router = Router();

/**
 * 地区一覧を取得する
 */
router.get('', async (req: Request, res: Response): Promise<void> => {
  const area = await getArea();
  res.json(area);
});

/**
 * 指定されたidの地区名とレビューを返す
 *
 */
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const [areaName, areaDetails, category] = await getAreaDetail(id);
  res.json({ name: areaName, areaDetails, category });
});

export const area = router;
