export interface PostReviewBody {
  Reviews: {
    user_id: number;
    area_id: number;
    category_id: number;
    review_content: string;
    evaluation: number;
  }[];
}
