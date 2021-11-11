import { Router } from 'express';
import { area } from './area/areaService';

const router = Router();

router.use('/area', area);

export const apiRouter = router;
