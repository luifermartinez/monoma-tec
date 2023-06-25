export interface User {
  email: string;
  password: string;
  user: {
    name: string;
    gender: string;
  };
  token: string;
}

export interface LoginInput {
  email: string;
  password: string;
}
