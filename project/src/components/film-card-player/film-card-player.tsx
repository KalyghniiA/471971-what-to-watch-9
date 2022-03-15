type FilmCardPlayerProps = {
  previewVideoLink: string;
  previewImage: string;
};

function FilmCardPlayer({ previewVideoLink, previewImage }: FilmCardPlayerProps): JSX.Element {
  return <video src={previewVideoLink} poster={previewImage} autoPlay width="280" height="170" muted />;
}

export default FilmCardPlayer;
