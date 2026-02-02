export enum ROLE {
  USER = "USER",
  ADMIN = "ADMIN",
}

export interface User {
  id: string;
  email: string;
  password: string;
  image?: string;
  username: string;
  role: ROLE;
}
