interface IPlaygroundQueryInput {
  q?: string;
  page?: number;
  limit?: number;
  sort?: string;
  fields?: string[];
}

interface IPlayground {
  id?: string;
  question: string;
  text: string;
  tries?: number;
  loadCPU?: number;
  loadMemory?: number;
  weight?: number;
  points?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
