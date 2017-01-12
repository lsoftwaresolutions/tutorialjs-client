interface ISectionQueryInput {
  course?: string;
  q?: string;
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string[];
}

interface ISection {
  id?: string;
  course?: string;
  name: string;
  description: string;
  order?: number;
  level?: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
