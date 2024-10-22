import { api } from '@/app/api/heroesAPI';
import { getNormalizedGraphData } from '@/app/utils/getNormalizedGraphData';

jest.mock('@/app/api/heroesAPI');

describe('getNormalizedGraphData', () => {
  const mockHeroDetails = {
    data: {
      id: 1,
      name: 'Hero One',
      films: [1, 2],
      starships: [101, 102],
    },
  };

  const mockStarships = [
    { data: { id: 101, name: 'Starship One' } },
    { data: { id: 102, name: 'Starship Two' } },
  ];

  const mockFilms = [
    { data: { id: 1, title: 'Film One', starships: [101] } },
    { data: { id: 2, title: 'Film Two', starships: [102] } },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should return normalized hero data with films and starships', async () => {
    (api.getHeroDetails as jest.Mock).mockResolvedValue(mockHeroDetails);
    (api.getStarships as jest.Mock).mockResolvedValue(mockStarships);
    (api.getFilms as jest.Mock).mockResolvedValue(mockFilms);

    const result = await getNormalizedGraphData(1);

    expect(result).toEqual({
      id: 1,
      name: 'Hero One',
      films: [
        { id: 1, name: 'Film One', starships: [101] },
        { id: 2, name: 'Film Two', starships: [102] },
      ],
      starships: [
        { id: 101, name: 'Starship One' },
        { id: 102, name: 'Starship Two' },
      ],
    });

    expect(api.getHeroDetails).toHaveBeenCalledWith(1);
    expect(api.getStarships).toHaveBeenCalledWith([101, 102]);
    expect(api.getFilms).toHaveBeenCalledWith([1, 2]);
  });
});
