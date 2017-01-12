interface ITagQueryInput {
  courseId?: string;
  q?: string;
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string[];
}

interface ITag {
  id?: string;
  name: string;
  description: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
