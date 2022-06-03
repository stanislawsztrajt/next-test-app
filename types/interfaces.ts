export interface Ipost {
  id: string;
  title: string;
  body: string;
  user: {
    name: string;
    email: string;
  };
}

export interface IpostsResponse {
  posts: {
    data: Ipost[];
  };
}
