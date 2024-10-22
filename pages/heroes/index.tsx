import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { api } from '@/app/api/heroesAPI';
import { Hero } from '@/app/types/Hero';
import { GridContainer } from '@/app/components/GridContainer';
import { MainLayout } from '@/app/components/MainLayout';
import { HeroList } from '@/app/components/HeroList';
import { Pagination } from '@/app/components/Pagination';
import { Loader } from '@/app/components/Loader';
import { EmptyComponent } from '@/app/components/EmptyComponent';

const HeroesPage = () => {
  const router = useRouter();
  const page = Number(router.query.page) || 1;

  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(page);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchHeroes = async () => {
      setIsLoading(true);

      try {
        const response = await api.getHeroes(currentPage);

        setHeroes(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 10));
      } catch (error) {
        console.error('Error fetching heroes', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroes();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    router.push(`/heroes?page=${page}`, undefined, { shallow: true });
  };

  return (
    <MainLayout>
      <Loader isLoading={isLoading}>
        <EmptyComponent data={heroes} text={'No heroes available ('}>
          <GridContainer>
            <HeroList heroes={heroes} />

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </GridContainer>
        </EmptyComponent>
      </Loader>
    </MainLayout>
  );
};

export default HeroesPage;
