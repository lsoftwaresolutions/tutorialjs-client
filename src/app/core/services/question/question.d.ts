interface IQuestionQueryInput {
  q?: string;
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string[];
}

interface IQuestion {
  id?: string;
  text: string;
  weight: number;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
