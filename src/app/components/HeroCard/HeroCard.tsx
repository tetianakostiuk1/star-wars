import React, { FC } from 'react';
import Link from 'next/link';
import s from './HeroCard.module.scss';

type Props = {
  id: number;
  name: string;
  image: string;
};
export const HeroCard: FC<Props> = ({ id, name, image }) => {
  return (
    <Link href={`heroes/${id}`} className={s.card}>
      <div
        className={s.cardImage}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <h2 className={s.cardTitle}>{name}</h2>
    </Link>
  );
};

export default HeroCard;
