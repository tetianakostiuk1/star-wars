import React, { FC, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { HeroData } from '@/app/utils/getNormalizedGraphData';

type Props = {
  hero: HeroData;
};

interface Node {
  id: string;
  position: { x: number; y: number };
  data: { label: string };
  style: { backgroundColor: string; color: string };
  type: string;
}

interface Edge {
  id: string;
  source: string;
  target: string;
  weight?: number;
  label?: string;
  style?: {
    backGroundColor?: string;
    color?: string;
  };
}

export const GraphView: FC<Props> = ({ hero }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const calculatePositions = (
    count: number,
    baseY: number,
    baseSpacing: number,
  ) => {
    const spacing = baseSpacing + (count > 3 ? (count - 3) * 100 : 0);

    if (count === 1) {
      return [{ x: 500, y: baseY }];
    } else {
      return Array.from({ length: count }, (_, index) => ({
        x: 250 + (index * spacing) / (count - 1),
        y: baseY,
      }));
    }
  };

  useEffect(() => {
    if (hero) {
      const heroNode: Node = {
        id: `${hero.id}-${hero.name}`,
        position: { x: 500, y: 10 },
        data: { label: hero.name },
        style: { backgroundColor: '#ad5fa9', color: '#fff' },
        type: 'default',
      };

      const filmPositions = calculatePositions(hero.films.length, 100, 500);

      const filmNodes: Node[] = hero.films.map((film, index) => ({
        id: `${film.id}`,
        position: filmPositions[index],
        data: { label: `${film.name}` },
        style: { backgroundColor: '#6b03fc', color: 'white' },
        type: 'default',
      }));

      const filmEdges: Edge[] = hero.films.map((film) => ({
        id: `edge-hero-${film.id}`,
        source: `${hero.id}-${hero.name}`,
        target: `${film.id}`,
      }));

      const starshipPositions = calculatePositions(
        hero.starships.length,
        300,
        400,
      );

      const starShipNodes: Node[] = hero.starships.map((starship, index) => ({
        id: `${starship.id}`,
        position: starshipPositions[index],
        data: { label: `${starship.name}` },
        style: { backgroundColor: '#2f2f2f', color: '#fff' },
        type: 'default',
      }));

      const starshipEdges: Edge[] = hero.starships.flatMap((starship) =>
        hero.films
          .filter((film) => film.starships.includes(starship.id))
          .map((film) => ({
            id: `edge-${film.id}-${starship.id}`,
            source: `${film.id}`,
            target: `${starship.id}`,
          })),
      );

      setNodes([heroNode, ...filmNodes, ...starShipNodes]);
      setEdges([...filmEdges, ...starshipEdges]);
    } else {
      console.log('No hero data available');
    }
  }, [hero, setEdges, setNodes]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      >
        <Controls />
        <MiniMap />
        <Background variant={'dots' as BackgroundVariant} gap={150} size={1} />
      </ReactFlow>
    </div>
  );
};

export default GraphView;
