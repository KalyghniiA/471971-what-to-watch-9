import FilmCardInfo from '../film-card-info/film-card-info';

type MainCardProps = {
  image: string,
  name: string,
  genre: string,
  data: number,
}

type FilmCardWrapProps = {
  mainCardData: MainCardProps,
}

function FilmCardWrap ({mainCardData}: FilmCardWrapProps):JSX.Element {
  return (
    <div className="film-card__wrap">

      <FilmCardInfo
        mainCardData = {mainCardData}
      />
    </div>
  );
}

export default FilmCardWrap;
