import FilmCardButtons from '../film-card-buttons/film-card-buttons';

type Description = {
  name: string,
  genre: string,
  data: number,
}

type FilmCardDescriptionProps = {
  description: Description
}

function FilmCardDescription ({description}: FilmCardDescriptionProps):JSX.Element {
  const {
    name,
    genre,
    data,
  } = description;

  return (
    <div className="film-card__desc">
      <h2 className="film-card__title">{name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span className="film-card__year">{data}</span>
      </p>

      <FilmCardButtons modification={false}/>
    </div>
  );
}

export default FilmCardDescription;
