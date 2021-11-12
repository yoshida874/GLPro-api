import { Router } from 'express';
import { area } from './area/area';
import { review } from './review/reviewController';

const router = Router();

router.use('/area', area);
router.use('/review', review);

export const apiRouter = router;
