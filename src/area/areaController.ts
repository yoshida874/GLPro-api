import { Controller, Get, Path, Route } from 'tsoa';
import { getArea, getAreaDetail } from './areaService';
import { GetArea, GetAreaDetail } from './areaInterface';

@Route('area')
export class AreaController extends Controller {
  /**
   * すべての地区のidと名前を返す
   * @summary 地区一覧API
   */
  @Get('')
  async GetArea(): Promise<GetArea[]> {
    const area = await getArea();
    return area;
  }

  /**
   * 指定された地区idの地区名、地区の詳細情報を返す。
   * @summary 地区詳細API
   */
  @Get('{id}')
  async GetAreaDetail(@Path() id: string): Promise<GetAreaDetail> {
    const res = await getAreaDetail(id);
    return res;
  }
}
