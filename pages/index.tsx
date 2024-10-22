import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { MainLayout } from '@/app/components/MainLayout';
import { VideoBackground } from '@/app/components/VideoBackground';

import StarWarsLogo from '../public/LogoStarWars.svg';
import s from '@/app/styles/pages/HomePage.module.scss';

const Index = () => {
  return (
    <MainLayout>
      <VideoBackground videoSrc="/star-wars-background-video-1080-cropped.mp4">
        <Image
          src={StarWarsLogo}
          alt="Star Wars Logo"
          className={s.overlayImage}
        />

        <Link href={'/heroes'} className={s.overlayButton}>
          get started
        </Link>
      </VideoBackground>
    </MainLayout>
  );
};

export default Index;
