interface IAnswerQueryInput {
  q?: string;
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string[];
}

interface IAnswer {
  id?: string;
  question: string;
  text: string;
  points?: number;
  order?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
