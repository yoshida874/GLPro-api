import { Controller, Get, Path, Route } from 'tsoa';
import { getArea, getAreaDetail } from './areaService';
import { GetArea, GetAreaDetail } from './areaInterface';

@Route('area')
export class AreaController extends Controller {
  @Get('')
  async GetArea(): Promise<GetArea[]> {
    const area = await getArea();
    return area;
  }

  @Get('{id}')
  async GetAreaDetail(@Path() id: string): Promise<GetAreaDetail> {
    const res = await getAreaDetail(id);
    return res;
  }
}
