type FilmCardBgProps = {
  bgImage: string,
}

function FilmCardBg ({bgImage}:FilmCardBgProps):JSX.Element {
  return (
    <div className="film-card__bg">
      <img src={`img/${bgImage}`} alt="The Grand Budapest Hotel"/>
    </div>
  );
}

export default FilmCardBg;
