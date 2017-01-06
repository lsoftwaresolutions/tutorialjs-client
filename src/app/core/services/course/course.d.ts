interface ICourseQueryInput {
  q?: string;
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string[];
}

interface ICourse {
  id?: string;
  name: string;
  description: string;
  image?: string;
  order?: number;
  levelId?: number;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
