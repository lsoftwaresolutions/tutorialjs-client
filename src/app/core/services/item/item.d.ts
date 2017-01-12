interface IItemQueryInput {
  course?: string;
  section?: string;
  q?: string;
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string[];
}

interface IItem {
  id?: string;
  course?: string;
  section?: string;
  name: string;
  description: string;
  order?: number;
  type?: string;
  resource?: string;
  level?: string;
  minTime?: number;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
