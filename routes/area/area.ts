import { PrismaClient } from '@prisma/client';
import { Response, Request, Router } from 'express';

const prisma = new PrismaClient();
const router = Router();

// GET /areadetails
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const area = await prisma.area.findMany({
    where: {
      id: Number(id), // Numberにキャスト
    },
    select: {
      area_name: true,
    },
  });
  const areaName = area[0].area_name;
  const area_details = await prisma.area
    .findUnique({
      where: {
        id: Number(id),
      },
    })
    .reviews(); // areaのreviews[]をリレーションして取得

  res.json({ name: areaName, area_details });
});

export const area = router;
