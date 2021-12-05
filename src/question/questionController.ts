import { Controller, Route, Get, Query } from 'tsoa';
import { getRefineQuestion } from './questionService';
import { GetRefineQuestion } from './questionInterface';

@Route('question')
export class QuestionController extends Controller {
  /**
   * クエリ文字列で指定がなかった場合：質問を全て返す<br>
   * 指定があった場合：指定された地区又は分類の質問を返す
   * @summary 条件別質問取得API
   */
  @Get('')
  async GetRefineQuestion(
    @Query() queryAreaId?: string,
    @Query() queryCategoryId?: string
  ): Promise<GetRefineQuestion[] | void> {
    try {
      const areaId = queryAreaId?.toString();
      const categoryId = queryCategoryId?.toString();
      const refineQuestion = await getRefineQuestion(areaId, categoryId);
      return refineQuestion;
    } catch (e) {
      return this.setStatus(400);
    }
  }
}
