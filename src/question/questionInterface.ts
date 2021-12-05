export interface QuestionWhere {
  area_id?: number;
  category_id?: number;
}

export interface GetRefineQuestion {
  id: number;
  area: {
    area_name: string;
  } | null;
  category: {
    category_name: string;
  } | null;
  question_title: string;
  question_content: string;
}
