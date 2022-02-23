import { FilmType } from '../../types/film';
import Header from '../../components/header/header';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import { CatalogTitle, CatalogTitleClassName } from '../../const';

type MyListProps = {
  filmsData: FilmType[],
}

function MyList ({filmsData}: MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <Header />
      <Catalog
        filmCardsData={filmsData}
        title={CatalogTitle.MyList}
        titleClass={CatalogTitleClassName.MyList}
      />
      <Footer />
    </div>
  );
}

export default MyList;
