import FilmCard from '../film-card/film-card';
import PageContent from '../page-content/page-content';

type MainCardProps = {
  image: string,
  bgImage: string,
  name: string,
  genre: string,
  data: number,
}

type DataProps = {
  id: number,
  name: string,
  image: string,
  description: string,
};

type AppScreenProps = {
  mainCardData: MainCardProps,
  cardsData: DataProps[]
}

function App({mainCardData, cardsData}: AppScreenProps): JSX.Element {
  return (
    <>
      <FilmCard
        mainCardData = {mainCardData}
      />
      <PageContent
        cardsData = {cardsData}
      />
    </>
  );
}

export default App;
