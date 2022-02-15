type DataProps = {
  id: number,
  name: string,
  image: string,
  description: string,
};

type SmallFilmCardProps = {
  data: DataProps
}

function SmallFilmCard ({data}: SmallFilmCardProps):JSX.Element {
  const  {
    name,
    image,
  } = data;

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

export default SmallFilmCard;
