import { PrismaClient } from '@prisma/client';
import { GetRegion } from './regionInterface';

const prisma = new PrismaClient();

export const getRegion = async (): Promise<GetRegion[]> => {
  const region = await prisma.region.findMany({
    select: {
      id: true,
      region_name: true,
      area: {
        select: {
          id: true,
          area_name: true,
        },
      },
    },
  });

  return region;
};
