import { Response, Request, Router } from 'express';
import { getRefineQuestion } from './questionService';

const router = Router();

/**
 * クエリ文字列で指定がなかった場合：質問を全て返す
 * 指定があった場合：指定されたarea又はcategoryのquestionを返す
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
  let areaId = '';
  let categoryId = '';
  try {
    if (typeof req.query.areaId !== 'undefined') {
      areaId = req.query.areaId.toString();
    }
    if (typeof req.query.categoryId !== 'undefined') {
      categoryId = req.query.categoryId.toString();
    }
    const RefineQuestion = await getRefineQuestion(areaId, categoryId);
    res.status(200).json(RefineQuestion);
  } catch (e) {
    res.status(400).json({ message: 'failure', error: e });
  }
});

export const question = router;
