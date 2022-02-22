import { FilmType } from '../../types/film';
import Header from '../../components/header/header';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import { CatalogType } from '../../const';

type MyListProps = {
  filmsData: FilmType[],
}

function MyList ({filmsData}: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <Header />
      <Catalog filmCardsData={filmsData} type={CatalogType.MyList}/>
      <Footer />
    </div>
  );
}

export default MyList;
