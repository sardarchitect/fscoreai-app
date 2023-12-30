export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };

  export type Project = {
    id: string;
    customer_id: string;
    name: string;
  };

  export type Task = {
    id: string;
    project_id: string;
    name: string;
  };