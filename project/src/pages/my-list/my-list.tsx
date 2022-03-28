import Header from '../../components/header/header';
import Catalog from '../../components/catalog/catalog';
import Footer from '../../components/footer/footer';
import { CatalogTitle, CatalogTitleClassName } from '../../const';

function MyList(): JSX.Element {
  return (
    <div className="user-page">
      <Header />
      <Catalog title={CatalogTitle.MyList} titleClass={CatalogTitleClassName.MyList} />
      <Footer />
    </div>
  );
}

export default MyList;
