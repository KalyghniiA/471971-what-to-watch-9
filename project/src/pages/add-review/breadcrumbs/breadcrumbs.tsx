type Breadcrumb = {
  film: string,
  typeAction: string,
}

type BreadcrumbProps = {
  breadcrumb: Breadcrumb
}

function Breadcrumbs({breadcrumb}: BreadcrumbProps): JSX.Element {
  const {
    film,
    typeAction,
  } = breadcrumb;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href="film-page.html" className="breadcrumbs__link">{film}</a>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">{typeAction}</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
