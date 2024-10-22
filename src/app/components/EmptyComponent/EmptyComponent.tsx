/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import './EmptyComponent.scss';

type Props = {
  data: any;
  text: string;
  children?: React.ReactNode;
};

export const EmptyComponent: FC<Props> = ({ data, text, children }) => {
  if (data === null || (data && !data.length)) {
    return <>{text && <p className="noContent">{text}</p>}</>;
  }

  return <>{children}</>;
};

export default EmptyComponent;
