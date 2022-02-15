import FilmCardPoster from '../film-card-poster/film-card-poster';
import FilmCardDescription from '../film-card-description/film-card-description';

type MainCardProps = {
  image: string,
  name: string,
  genre: string,
  data: number,
}

type FilmCardInfoProps = {
  mainCardData: MainCardProps,
}

function FilmCardInfo ({mainCardData}: FilmCardInfoProps):JSX.Element {
  const {
    image,
    ...endData
  } = mainCardData;

  return (
    <div className="film-card__info">
      <FilmCardPoster image = {image}/>
      <FilmCardDescription description = {endData}/>
    </div>
  );
}

export default FilmCardInfo;
