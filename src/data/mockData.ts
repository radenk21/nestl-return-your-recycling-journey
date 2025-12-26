import { Badge, RecyclingAction, UserStats } from '@/types/recycling';

export const mockUserStats: UserStats = {
  totalPoints: 2450,
  level: 5,
  levelProgress: 65,
  totalRecycled: 127,
  co2Saved: 45.5,
  treesEquivalent: 3,
};

export const mockBadges: Badge[] = [
  {
    id: 'first-recycle',
    name: 'Langkah Pertama',
    description: 'Selesaikan daur ulang pertamamu',
    icon: '🌱',
    unlocked: true,
    unlockedAt: new Date('2024-01-15'),
  },
  {
    id: 'streak-10',
    name: '10x Streak',
    description: 'Daur ulang 10 hari berturut-turut',
    icon: '🔥',
    unlocked: true,
    unlockedAt: new Date('2024-02-01'),
  },
  {
    id: 'plastic-hero',
    name: 'Plastic Hero',
    description: 'Daur ulang 50 botol plastik',
    icon: '🦸',
    unlocked: true,
    unlockedAt: new Date('2024-02-20'),
  },
  {
    id: '100-points',
    name: '100 Points Club',
    description: 'Kumpulkan 100 poin pertama',
    icon: '💯',
    unlocked: true,
    unlockedAt: new Date('2024-01-20'),
  },
  {
    id: 'eco-warrior',
    name: 'Eco Warrior',
    description: 'Capai level 5',
    icon: '🌍',
    unlocked: true,
    unlockedAt: new Date('2024-03-01'),
  },
  {
    id: 'category-master',
    name: 'Category Master',
    description: 'Daur ulang semua 5 kategori',
    icon: '🏆',
    unlocked: false,
  },
  {
    id: 'early-bird',
    name: 'Early Bird',
    description: 'Daur ulang sebelum jam 8 pagi',
    icon: '🐤',
    unlocked: false,
  },
  {
    id: 'weekend-warrior',
    name: 'Weekend Warrior',
    description: 'Daur ulang di akhir pekan',
    icon: '⚡',
    unlocked: false,
  },
];

export const mockRecentActivity: RecyclingAction[] = [
  {
    id: '1',
    category: 'pet',
    points: 15,
    timestamp: new Date('2024-03-10T14:30:00'),
    binLocation: 'Mall Senayan City',
  },
  {
    id: '2',
    category: 'ubc',
    points: 15,
    timestamp: new Date('2024-03-10T10:15:00'),
    binLocation: 'Kantor Sudirman',
  },
  {
    id: '3',
    category: 'aluminium',
    points: 20,
    timestamp: new Date('2024-03-09T16:45:00'),
    binLocation: 'Stasiun MRT Bundaran HI',
  },
  {
    id: '4',
    category: 'flex-plastic',
    points: 12,
    timestamp: new Date('2024-03-09T12:00:00'),
    binLocation: 'Alfamart Kuningan',
  },
  {
    id: '5',
    category: 'carton',
    points: 10,
    timestamp: new Date('2024-03-08T09:30:00'),
    binLocation: 'Supermarket Grand Lucky',
  },
];

export const mockRewards = [
  {
    id: '1',
    name: 'Voucher GoPay Rp10.000',
    points: 500,
    image: '💳',
    available: true,
  },
  {
    id: '2',
    name: 'Diskon 20% Nestlé Products',
    points: 300,
    image: '🏷️',
    available: true,
  },
  {
    id: '3',
    name: 'Tumbler Eco-Friendly',
    points: 1000,
    image: '🥤',
    available: true,
  },
  {
    id: '4',
    name: 'Donasi untuk Hutan',
    points: 200,
    image: '🌳',
    available: true,
  },
];

export const mockNearbyBins = [
  {
    id: '1',
    name: 'Smart Bin Plaza Indonesia',
    distance: '250m',
    categories: ['pet', 'ubc', 'aluminium'],
  },
  {
    id: '2',
    name: 'Smart Bin Grand Indonesia',
    distance: '500m',
    categories: ['pet', 'carton', 'flex-plastic'],
  },
];
