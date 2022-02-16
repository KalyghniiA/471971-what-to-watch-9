type FilmCardOverviewData = {
  description: string,
  director: string,
  actors: string[],
}

type FilmCardOverviewProps = {
  filmData: FilmCardOverviewData,
}

function FilmCardOverview({filmData}: FilmCardOverviewProps): JSX.Element {
  const {description, director, actors} = filmData;

  return (
    <div className="film-card__text">
      <p>{description}</p>

      <p className="film-card__director"><strong>Director: {director}</strong></p>

      <p className="film-card__starring"><strong>Starring: {actors.join(', ')}</strong></p>
    </div>
  );
}

export default FilmCardOverview;
