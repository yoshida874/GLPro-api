import { Router } from 'express';
import { area } from './area/areaControl';
import { region } from './region/regionControl';
import { review } from './review/reviewControl';

const router = Router();

router.use('/area', area);
router.use('/region', region);
router.use('/review', review);

export const apiRouter = router;
