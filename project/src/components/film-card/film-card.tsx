import FilmCardBg from '../film-card-bg/film-card-bg';
import Header from '../header/header';
import FilmCardWrap from '../film-card-wrap/film-card-wrap';

type MainCardProps = {
  image: string,
  bgImage: string,
  name: string,
  genre: string,
  data: number,
}

type FilmCardProps = {
  mainCardData: MainCardProps
}

function FilmCard ({mainCardData}:FilmCardProps):JSX.Element {
  const {
    bgImage,
    ...endData
  } = mainCardData;

  return (
    <section className="film-card">
      <FilmCardBg
        bgImage = {bgImage}
      />
      <h1 className="visually-hidden">WTW</h1>
      <Header />
      <FilmCardWrap
        mainCardData = {endData}
      />
    </section>
  );
}
export default FilmCard;
