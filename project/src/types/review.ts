type UserReview = {
  id: number;
  name: string;
};

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: UserReview;
};

export type ReviewData = {
  comment: string;
  rating: number;
  id: number;
};
