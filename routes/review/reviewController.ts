import { Response, Request, Router } from 'express';
import { postReview } from './reviewService';

const router = Router();

router.post('/create', async (req: Request, res: Response): Promise<void> => {
  console.log(req.body);
  try {
    await postReview(req.body);
    res.status(200).json({ message: 'success' });
  } catch (e) {
    res.status(400).json({ message: 'failure', error: e });
  }
});

export const review = router;
