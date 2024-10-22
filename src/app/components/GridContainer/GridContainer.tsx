import React, { FC, ReactNode } from 'react';
import s from './GridContainer.module.scss';

type Props = {
  children: ReactNode;
};
export const GridContainer: FC<Props> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default GridContainer;
