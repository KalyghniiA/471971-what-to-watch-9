import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';

type DataProps = {
  id: number,
  name: string,
  image: string,
  description: string,
};

type PageContentProps = {
  cardsData: DataProps[]
}

function PageContent ({cardsData}:PageContentProps):JSX.Element {
  return (
    <div className="page-content">
      <Catalog cardsData = {cardsData}/>
      <Footer />
    </div>
  );
}

export default PageContent;
