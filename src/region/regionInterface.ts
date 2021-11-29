export interface GetRegion {
  id: number;
  region_name: string;
  area: {
    id: number;
    area_name: string;
  }[];
}
