interface ISectionQueryInput {
  courseId?: string;
  q?: string;
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string[];
}

interface ISection {
  id?: string;
  courseId?: string;
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
