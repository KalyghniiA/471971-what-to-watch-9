import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { useRef, useState } from 'react';
import { LoadingStatus } from '../../const';
import Preloader from '../../components/preloader/preloader';
import { selectFilms, selectFilmStatus } from '../../store/film-data-process/film-data-process';
import browserHistory from '../../browser-history';
import ServerFailed from '../../components/server-failed/server-failed';

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
  const [statusPlaying, setStatusPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [viewingPercentage, setViewingPercentage] = useState(0);

  const videoPlayerRef = useRef<HTMLVideoElement>(null);
  const film = useAppSelector(selectFilms).find((filmData) => filmData?.id === Number(id));
  const filmsStatus = useAppSelector(selectFilmStatus);

  const createFilmDuration = () => {
    const differenceTime = duration - currentTime;
    const hours = Math.floor(differenceTime / 60 / 60);
    const minutes = Math.floor(differenceTime / 60) - hours * 60;
    const seconds = Math.floor(differenceTime % 60);

    return `-${[
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0'),
    ].join(':')}`;
  };

  const handleChangePlayingButton = () => {
    setStatusPlaying(!statusPlaying);
    !statusPlaying
      ? videoPlayerRef.current && videoPlayerRef.current.play()
      : videoPlayerRef.current && videoPlayerRef.current.pause();
  };

  const handleClickFullScreen = () => {
    videoPlayerRef.current && videoPlayerRef.current.requestFullscreen();
  };

  const handleClickToExit = () => {
    browserHistory.back();
  };

  const handleVideoLoadedMetaData = () => {
    videoPlayerRef.current && setDuration(Number(videoPlayerRef.current.duration.toFixed()));
  };

  const handleCurrentTimeUpdate = () => {
    videoPlayerRef.current && setCurrentTime(Number(videoPlayerRef.current.currentTime.toFixed()));
    setViewingPercentage(Number(((currentTime / duration) * 100).toFixed()));
  };

  if (filmsStatus === LoadingStatus.Loading) {
    return <Preloader />;
  }

  if (!film) {
    return <ServerFailed />;
  }

  return (
    <div className="player">
      <video
        src={film.videoLink}
        className="player__video"
        poster={film.backgroundImage}
        ref={videoPlayerRef}
        onLoadedMetadata={handleVideoLoadedMetaData}
        onTimeUpdate={handleCurrentTimeUpdate}
      />

      <button type="button" className="player__exit" onClick={handleClickToExit}>
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div
            className="player__time"
          >
            <progress className="player__progress" value={viewingPercentage} max="100"></progress>
            <div className="player__toggler" style={{ left: `${viewingPercentage}%` }} draggable>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{createFilmDuration()}</div>
        </div>
        <div className="player__controls-row">
          {statusPlaying ? (
            <PauseButton onChangeButton={handleChangePlayingButton} />
          ) : (
            <PlayButton onChangeButton={handleChangePlayingButton} />
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
