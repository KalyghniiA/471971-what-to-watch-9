type FilmCardPosterProps = {
  image: string,
}

function FilmCardPoster ({image}: FilmCardPosterProps):JSX.Element {
  return (
    <div className="film-card__poster">
      <img src={`img/${image}`} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
    </div>
  );
}

export default FilmCardPoster;
