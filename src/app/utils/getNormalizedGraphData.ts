import { api } from '@/app/api/heroesAPI';

export type Starship = {
  id: number;
  name: string;
};

export type Film = {
  id: number;
  name: string;
  starships: number[];
};

export type HeroData = {
  id: number;
  name: string;
  films: Film[];
  starships: Starship[];
};

export const getNormalizedGraphData = async (id: number): Promise<HeroData> => {
  const { data: hero } = await api.getHeroDetails(id);

  const [starships, films] = await Promise.all([
    api.getStarships(hero.starships),
    api.getFilms(hero.films),
  ]);

  return {
    id,
    name: hero.name,
    films: films.map(({ data }) => ({
      id: data.id,
      name: data.title,
      starships: data.starships,
    })),
    starships: starships.map(({ data }) => ({
      id: data.id,
      name: data.name,
    })),
  };
};
