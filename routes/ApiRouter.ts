import { Router } from 'express';
import { area } from './area/area';
const router = Router();

router.use('/area', area);

export const apiRouter = router;
