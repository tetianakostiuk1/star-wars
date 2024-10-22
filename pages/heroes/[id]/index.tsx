import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { GraphView } from '@/app/components/Graph';
import {
  getNormalizedGraphData,
  HeroData,
} from '@/app/utils/getNormalizedGraphData';

const HeroPage: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [selectedHero, setSelectedHero] = useState<HeroData | null>(null);

  useEffect(() => {
    const getHeroData = async () => {
      if (!id) {
        return;
      }

      try {
        const hero = await getNormalizedGraphData(+id);
        setSelectedHero(hero);
      } catch (error) {
        console.error(error, 'error getting graph data');
      }
    };

    getHeroData();
  }, [id]);

  return (
    <>
      {selectedHero && (
        <>
          <h2>{selectedHero.name}</h2>
          <GraphView hero={selectedHero} />
        </>
      )}
    </>
  );
};

export default HeroPage;
