import { PrismaClient } from '@prisma/client';
import { GetArea, GetAreaDetail } from './areaInterface';

const prisma = new PrismaClient();

export const getArea = async (): Promise<GetArea[]> => {
  const area = await prisma.area.findMany({
    select: {
      id: true,
      area_name: true,
    },
  });
  return area;
};

/**
 * 指定されたidの地区名とレビューを返す
 *
 */
export const getAreaDetail = async (id: string): Promise<GetAreaDetail> => {
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

  return { name: areaName, areaDetails, category };
};
