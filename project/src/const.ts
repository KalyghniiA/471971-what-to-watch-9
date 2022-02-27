export enum AppRoute {
  Root = '/',
  Film = '/films',
  Login = '/login',
  MyList = '/mylist',
  Player = '/player',
  AddReview = '/add-review',
}

export enum CatalogTitle {
  Main = 'Catalog',
  Card = 'More like this',
  MyList = 'Catalog',
}

export enum CatalogTitleClassName {
  Main = 'visually-hidden',
  MyList = 'visually-hidden',
}

export enum CatalogClassName {
  Card = 'catalog--like-this',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
