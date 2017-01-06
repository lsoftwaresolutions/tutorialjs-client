interface ILevelQueryInput {
  courseId?: string;
  q?: string;
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string[];
}

interface ILevel {
  id?: string;
  courseId?: string;
  name: string;
  description: string;
  color?: string;
  points?: number;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
