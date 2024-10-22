import React, { FC, ReactNode } from 'react';

import { Header } from '@/app/components/Header';

import '../../styles/utils/reset.scss';
import '../../styles/utils/normalize.scss';
import s from './MainLayout.module.scss';
import { Footer } from '@/app/components/Footer';

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={s.main}>
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default MainLayout;
