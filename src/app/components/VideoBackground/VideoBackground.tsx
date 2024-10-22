import React, { FC } from 'react';
import s from './VideoBackground.module.scss';

type Props = {
  videoSrc: string;
  children?: React.ReactNode;
};

export const VideoBackground: FC<Props> = ({ videoSrc, children }) => {
  return (
    <div className={s.videoContainer}>
      <video className={s.video} autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={s.overlay}>{children}</div>
    </div>
  );
};

export default VideoBackground;
