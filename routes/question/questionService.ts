import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
interface question {
  area_id?: number;
  category_id?: number;
}
export const getRefineQuestion = async (areaId: string, categoryId: string) => {
  // Whereで指定する項目
  let questionWhere: question = {};
  if (areaId !== '' || '' !== categoryId) {
    if (areaId !== '') {
      questionWhere.area_id = Number(areaId);
      if (categoryId !== '') {
        questionWhere.category_id = Number(categoryId);
      }
    } else {
      questionWhere.category_id = Number(categoryId);
    }
  }
  const refineAreaCategory = await prisma.question.findMany({
    where: questionWhere,
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
};
