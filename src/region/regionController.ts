import { Controller, Route, Get } from 'tsoa';
import { getRegion } from './regionService';
import { GetRegion } from './regionInterface';

@Route('region')
export class RegionController extends Controller {
  /**
   * 地区一覧と地域分類を取得する
   * @summary 地域分類取得API
   */
  @Get('/')
  async PostReview(): Promise<{ region: GetRegion[] }> {
    const region = await getRegion();
    return { region: region };
  }
}
