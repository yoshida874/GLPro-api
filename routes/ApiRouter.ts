import { Router } from 'express';
import { about } from './about/About';
const router = Router();

router.use('/about', about);

export const apiRouter = router;
