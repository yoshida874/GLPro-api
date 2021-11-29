import { PrismaClient } from '@prisma/client';
import { PostReviewBody } from './reviewInterface';

const prisma = new PrismaClient();

export const postReview = async (reviewBody: PostReviewBody): Promise<void> => {
  await prisma.review.create({
    data: {
      user_id: reviewBody.user_id,
      area_id: reviewBody.area_id,
      category_id: reviewBody.category_id,
      review_content: reviewBody.review_content,
      evaluation: reviewBody.evaluation,
    },
  });
  return;
};
