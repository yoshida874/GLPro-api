import { Router } from 'express';
import { about } from './about/about';
import { area } from './area/areadetails';
const router = Router();

router.use('/about', about);
router.use('/area', area);

export const apiRouter = router;
