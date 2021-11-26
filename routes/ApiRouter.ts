import { Router } from 'express';
import { area } from './area/areaControl';
import { region } from './region/regionControl';
import { review } from './review/reviewControl';
import { question } from './question/questionControl';

const router = Router();

router.use('/area', area);
router.use('/region', region);
router.use('/review', review);
router.use('/question', question);

export const apiRouter = router;
