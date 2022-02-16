type DataProps = {
  id: number,
  name: string,
  image: string,
  description: string,
};

type FilmCardProps = {
  filmData: DataProps
}

function FilmCard({filmData}: FilmCardProps): JSX.Element {
  const  {
    name,
    image,
  } = filmData;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={`img/${image}`} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
