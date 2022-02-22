import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import {FilmType} from '../../types/film';
import { CatalogType } from '../../const';

type PageContentProps = {
  filmsData: FilmType[]
}

function PageContent({filmsData}: PageContentProps): JSX.Element {
  return (
    <div className="page-content">
      <Catalog filmCardsData={filmsData} type={CatalogType.Main}/>
      <Footer />
    </div>
  );
}

export default PageContent;
