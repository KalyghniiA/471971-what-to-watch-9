import Catalog from '../catalog/catalog';
import Footer from '../../../components/footer/footer';
import {Film} from '../../../types/film';

type PageContentProps = {
  filmsData: Film[]
}

function PageContent({filmsData}: PageContentProps): JSX.Element {
  return (
    <div className="page-content">
      <Catalog filmCardsData={filmsData} />
      <Footer />
    </div>
  );
}

export default PageContent;
