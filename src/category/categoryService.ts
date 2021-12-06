import { PrismaClient } from '@prisma/client';
import { GetCategory } from './categoryInterface';

const prisma = new PrismaClient();

/**
 * 全ての分類のidとnameを返す
 */
export const getCategory = async (): Promise<GetCategory[]> => {
  const category = await prisma.category.findMany({
    select: {
      id: true,
      category_name: true,
    },
  });
  return category;
};
