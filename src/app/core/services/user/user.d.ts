interface IUserQueryInput {
  q?: string;
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string[];
}

interface IUser {
  id: number;
  login: string;
  email: string;
  firstname?: string;
  lastname?: string;
  birthday?: Date;
  levelId?: number;
  points?: number;
  reputation?: number;
  services?: IUserService;
  role?: string;
  picture?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IUserRegistrationRequest {
  login: string;
  email: string;
  password: string;
  lastname?: string;
  role?: string;
  picture?: string;
}

interface IUserUpdateRequest {
  firstname?: string;
  lastname?: string;
  birthday?: Date;
  picture?: string;
}

interface IUserService {
  facebook?: string,
  github?: string,
  google?: string
}
