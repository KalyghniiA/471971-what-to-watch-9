import { genres } from './const';
import { Film as FilmType } from './types/film';

export const filterFilm = (films: FilmType[], type: string) => {
  if (type === genres['All Genres']) {
    return films;
  }
  return films.filter((film) => film.genre === type);
};
