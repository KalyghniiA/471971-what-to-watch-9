type Breadcrumbs = {
  film: string,
  type: string,
}

type BreadcrumbsProps = {
  breadcrumbs: Breadcrumbs
}

function Breadcrumbs ({breadcrumbs}: BreadcrumbsProps): JSX.Element {
  const {
    film,
    type,
  } = breadcrumbs;

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href="film-page.html" className="breadcrumbs__link">{film}</a>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">{type}</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
