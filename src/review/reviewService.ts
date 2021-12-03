import { PrismaClient } from '@prisma/client';
import { PostReviewBody } from './reviewInterface';

const prisma = new PrismaClient();

export const postReview = async (reviewBody: PostReviewBody): Promise<void> => {
  await prisma.review.createMany({
    data: reviewBody.Reviews,
  });
  return;
};
