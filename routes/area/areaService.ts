import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getArea = async () => {
  const area = await prisma.area.findMany({
    select: {
      id: true,
      area_name: true,
    },
  });

  return area;
};

export const getAreaDetail = async (id: string) => {
  const area = await prisma.area.findMany({
    where: {
      id: Number(id), // Numberにキャスト
    },
    select: {
      area_name: true,
    },
  });
  const areaName = area[0].area_name;
  const areaDetails = await prisma.area
    .findUnique({
      where: {
        id: Number(id),
      },
    })
    .reviews(); // areaのreviews[]をリレーションして取得

  const category = await prisma.category.findMany({
    select: {
      id: true,
      category_name: true,
    },
  });

  return [areaName, areaDetails, category];
};
