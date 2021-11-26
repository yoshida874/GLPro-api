import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getRefineQuestion = async (areaId: string, categoryId: string) => {
  if (areaId && categoryId) {
    const refineAreaCategory = await prisma.question.findMany({
      where: {
        area_id: Number(areaId),
        category_id: Number(categoryId),
      },
      select: {
        id: true,
        area: {
          select: {
            area_name: true,
          },
        },
        category: {
          select: {
            category_name: true,
          },
        },
        question_title: true,
        question_content: true,
      },
    });
    return { refineAreaCategory };
  } else if (areaId) {
    const refineArea = await prisma.question.findMany({
      where: {
        area_id: Number(areaId),
      },
      select: {
        id: true,
        area: {
          select: {
            area_name: true,
          },
        },
        category: {
          select: {
            category_name: true,
          },
        },
        question_title: true,
        question_content: true,
      },
    });
    return { refineArea };
  } else if (categoryId) {
    const refineCategory = await prisma.question.findMany({
      where: {
        category_id: Number(categoryId),
      },
      select: {
        id: true,
        area: {
          select: {
            area_name: true,
          },
        },
        category: {
          select: {
            category_name: true,
          },
        },
        question_title: true,
        question_content: true,
      },
    });
    return { refineCategory };
  } else {
    const question = await prisma.question.findMany({
      select: {
        id: true,
        area: {
          select: {
            area_name: true,
          },
        },
        category: {
          select: {
            category_name: true,
          },
        },
        question_title: true,
        question_content: true,
      },
    });
    return { question };
  }
};
