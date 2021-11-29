import { Review } from '@prisma/client';

export interface GetArea {
  id: number;
  area_name: string;
}

export interface GetAreaDetail {
  name: string;
  areaDetails: Review[];
  category: {
    id: number;
    category_name: string;
  }[];
}
