interface PaginatedData<T> {
  total: number;
  totalPages: number;
  page: number;
  pageSize: number;
  data: T[];
}

export type FollowerData = PaginatedData<User>;
export type ResultData = PaginatedData<User>;

interface User {
  id: string;
  name: string;
  username: string;
  avater: string; // typo?: correct it to `avatar`
  isFollowing: boolean;
}

export type UserData = User[];

interface Tag {
  id: string;
  name: string;
  count: number;
}

export type TagsData = Tag[];
