type UserReview = {
  id: string;
  name: string;
};

export type Review = {
  comment: string;
  date: Date;
  id: number;
  rating: number;
  user: UserReview;
};
