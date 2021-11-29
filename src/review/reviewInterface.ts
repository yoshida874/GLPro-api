export interface PostReviewBody {
  user_id: number;
  area_id: number;
  category_id: number;
  review_content: string;
  evaluation: number;
}
