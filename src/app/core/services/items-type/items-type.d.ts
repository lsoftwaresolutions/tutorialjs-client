interface IItemsTypeQueryInput {
  q?: string;
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string[];
}

interface IItemsType {
  id?: string;
  name: string;
  description: string;
}
