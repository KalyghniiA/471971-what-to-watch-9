import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useRef } from 'react';
import { selectPlayingVideo } from '../../store/video-process/video-process';
import { AppRoute, LoadingStatus, VideoPlaying, ViewLink } from '../../const';
import { redirectToRoute } from '../../store/action';
import Preloader from '../../components/preloader/preloader';
import NotFound from '../not-found/not-found';

type ButtonProps = {
  onChangeButton: () => void;
};

function PlayButton({ onChangeButton }: ButtonProps): JSX.Element {
  return (
    <button type="button" className="player__play" onClick={onChangeButton}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

function PauseButton({ onChangeButton }: ButtonProps): JSX.Element {
  return (
    <button type="button" className="player__play" onClick={onChangeButton}>
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"></use>
      </svg>
      <span>Pause</span>
    </button>
  );
}

function Player(): JSX.Element {
  const { id } = useParams();

  const videoPlayerRef = useRef<HTMLVideoElement>(null);

  const { videoPlayingStatus } = useAppSelector(({ VIDEO }) => VIDEO);
  const { activeLink } = useAppSelector(({ APP }) => APP);
  const { films, isFilmsStatus } = useAppSelector(({ FILM_DATA }) => FILM_DATA);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(selectPlayingVideo(VideoPlaying.Pause)); //пока так, в дальнейшем переделать на ретерн
  }, []);

  const handleChangePlayButton = () => {
    dispatch(selectPlayingVideo(VideoPlaying.Play));
    videoPlayerRef.current && videoPlayerRef.current.play();
  };

  const handleChangePauseButton = () => {
    dispatch(selectPlayingVideo(VideoPlaying.Pause));
    videoPlayerRef.current && videoPlayerRef.current.pause();
  };

  const handleClickFullScreen = () => {
    videoPlayerRef.current && videoPlayerRef.current.requestFullscreen();
  };

  const handleClickToExit = () => {
    switch (activeLink) {
      case ViewLink.Main:
        dispatch(redirectToRoute(AppRoute.Root));
        break;
      case ViewLink.Card:
        dispatch(redirectToRoute(`${AppRoute.Film}/${id}`));
        break;
    }
  };

  if (isFilmsStatus === LoadingStatus.LOADING) {
    return <Preloader />;
  }

  if (isFilmsStatus === LoadingStatus.FAILED) {
    return <NotFound />;
  }

  return (
    <div className="player">
      <video src={films[Number(id) - 1].videoLink} className="player__video" poster={films[Number(id) - 1].backgroundImage} ref={videoPlayerRef}>

      </video>

      <button type="button" className="player__exit" onClick={handleClickToExit}>
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%' }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>
        <div className="player__controls-row">
          {videoPlayingStatus === VideoPlaying.Play ? (
            <PauseButton onChangeButton={handleChangePauseButton} />
          ) : (
            <PlayButton onChangeButton={handleChangePlayButton} />
          )}
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen" onClick={handleClickFullScreen}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
