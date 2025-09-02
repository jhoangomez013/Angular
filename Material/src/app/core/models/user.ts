export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface CreateUser {

   name: string | null;
  email: string | null;
  username: string | null;
}