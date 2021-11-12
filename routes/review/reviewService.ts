import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface paramType {
  user_id: number;
  area_id: number;
  category_id: number;
  review_content: string;
  evaluation: number;
}

export const postReview = async (reviewParam: paramType): Promise<void> => {
  await prisma.review.create({
    data: {
      user_id: reviewParam.user_id,
      area_id: reviewParam.area_id,
      category_id: reviewParam.category_id,
      review_content: reviewParam.review_content,
      evaluation: reviewParam.evaluation,
    },
  });
  return;
};
