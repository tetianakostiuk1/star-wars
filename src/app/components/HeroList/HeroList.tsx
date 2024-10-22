import React, { FC } from 'react';

import { HeroCard } from '@/app/components/HeroCard';
import { Hero } from '@/app/types/Hero';

type Props = {
  heroes: Hero[];
};
export const HeroList: FC<Props> = ({ heroes }) => {
  const getHeroImage = (id: number) => {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
  };

  return (
    <>
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          id={hero.id}
          name={hero.name}
          image={getHeroImage(hero.id)}
        />
      ))}
    </>
  );
};

export default HeroList;
