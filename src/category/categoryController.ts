import { Controller, Get, Route } from 'tsoa';
import { getCategory } from './categoryService';
import { GetCategory } from './categoryInterface';

@Route('category')
export class CategoryController extends Controller {
  /**
   *すべての分類のidとnameを返す
   *@summary 分類一覧API
   */
  @Get(``)
  async GetCategory(): Promise<GetCategory[]> {
    const category = await getCategory();
    return category;
  }
}
