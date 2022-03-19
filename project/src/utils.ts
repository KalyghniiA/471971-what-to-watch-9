import { genres } from './const';
import { FilmType } from './types/film';

export const filteringFilms = (films: FilmType[], type: string) => {
  if (type === genres['All Genres']) {
    return films;
  }
  return films.filter((film) => film.genre === type);
};
