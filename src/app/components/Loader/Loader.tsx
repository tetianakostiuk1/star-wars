import React, { FC } from 'react';
import './Loader.scss';

type Props = {
  isLoading?: boolean;
  children?: React.ReactNode;
};

export const Loader: FC<Props> = ({ isLoading, children }) => {
  return <>{isLoading ? <div className="spinner" /> : <>{children}</>}</>;
};

export default Loader;
