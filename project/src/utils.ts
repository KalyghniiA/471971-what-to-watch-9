import { genres } from './const';
import { Film as FilmType } from './types/film';

export const filterFilm = (films: FilmType[], type: string) => {
  if (type === genres['All Genres']) {
    return films;
  }
  return films.filter((film) => film.genre === type);
};

export const createFilmDuration = ( duration: number, currentTime: number) => {
  const differenceTime = duration - currentTime;
  const hours = Math.floor(differenceTime / 60 / 60);
  const minutes = Math.floor(differenceTime / 60) - hours * 60;
  const seconds = Math.floor(differenceTime % 60);

  return `-${[
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0'),
  ].join(':')}`;
};
