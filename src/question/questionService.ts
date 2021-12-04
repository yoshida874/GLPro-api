import { PrismaClient } from '@prisma/client';
import { Question, GetRefineQuestion } from './questionInterface';

const prisma = new PrismaClient();

/**
 * 指定がなかった場合：質問をすべて返す
 * 指定があった場合：指定された地区又は分類の質問を返す
 */
export const getRefineQuestion = async (
  areaId: string | undefined,
  categoryId: string | undefined
): Promise<GetRefineQuestion[]> => {
  // Whereで指定する項目
  const questionWhere: Question = {};
  if (typeof areaId !== 'undefined') {
    questionWhere.area_id = Number(areaId);
  }
  if (typeof categoryId !== 'undefined') {
    questionWhere.category_id = Number(categoryId);
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
  return refineAreaCategory;
};
