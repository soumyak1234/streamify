import { faker } from '@faker-js/faker';
import { subDays, format } from 'date-fns';

export const generateMockData = () => {
  // Generate mock metrics
  const metrics = {
    totalUsers: faker.number.int({ min: 100000, max: 1000000 }),
    activeUsers: faker.number.int({ min: 50000, max: 500000 }),
    totalStreams: faker.number.int({ min: 1000000, max: 10000000 }),
    revenue: faker.number.int({ min: 1000000, max: 5000000 }),
    topArtist: faker.person.fullName(),
  };

  // Generate mock user growth data
  const userGrowthData = Array.from({ length: 12 }, (_, i) => ({
    month: format(subDays(new Date(), (11 - i) * 30), 'MMM'),
    totalUsers: faker.number.int({ min: 100000, max: 1000000 }),
    activeUsers: faker.number.int({ min: 50000, max: 500000 }),
  }));

  // Generate mock revenue distribution
  const revenueDistribution = [
    { source: 'Subscriptions', value: faker.number.int({ min: 500000, max: 2000000 }) },
    { source: 'Advertisements', value: faker.number.int({ min: 100000, max: 1000000 }) },
    { source: 'Merchandise', value: faker.number.int({ min: 50000, max: 500000 }) },
  ];

  // Generate mock top songs
  const topSongs = Array.from({ length: 5 }, () => ({
    name: faker.music.songName(),
    artist: faker.person.fullName(),
    streams: faker.number.int({ min: 10000, max: 1000000 }),
  }));

  // Generate mock streams data
  const recentStreams = Array.from({ length: 100 }, () => ({
    songName: faker.music.songName(),
    artist: faker.person.fullName(),
    dateStreamed: faker.date.recent({ days: 30 }),
    streamCount: faker.number.int({ min: 1, max: 1000 }),
    userId: faker.string.uuid(),
  }));

  return {
    metrics,
    userGrowthData,
    revenueDistribution,
    topSongs,
    recentStreams,
  };
}; 