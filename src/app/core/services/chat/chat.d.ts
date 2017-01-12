interface IChatQueryInput {
  q?: string;
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string[];
}

interface IChat {
  id?: string;
  user?: IUser;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}
