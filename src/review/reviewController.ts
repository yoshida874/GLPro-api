import { Controller, Route, Post, Body } from 'tsoa';
import { postReview } from './reviewService';
import { PostReviewBody } from './reviewInterface';

@Route('review')
export class ReviewController extends Controller {
  @Post('create')
  async PostReview(@Body() body: PostReviewBody): Promise<void> {
    try {
      await postReview(body);
      return this.setStatus(200);
    } catch (e) {
      return this.setStatus(400);
    }
  }
}
