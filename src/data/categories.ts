import { CategoryInfo } from '@/types/recycling';

export const categories: CategoryInfo[] = [
  {
    id: 'ubc',
    name: 'UBC',
    nameFull: 'Used Beverage Cartons',
    description: 'Karton bekas minuman seperti susu kotak dan jus',
    icon: '🥛',
    color: 'ubc',
    lightColor: 'ubc-light',
    points: 15,
    correctExamples: [
      'Kotak susu (dibilas bersih)',
      'Kotak jus (dilipat rata)',
      'Kemasan minuman tetra pak',
    ],
    incorrectExamples: [
      'Kotak yang masih berisi cairan',
      'Kotak yang tidak dibilas',
      'Karton makanan berminyak',
    ],
    instructions: [
      'Kosongkan semua isi minuman',
      'Bilas karton dengan air bersih',
      'Lipat rata untuk menghemat ruang',
      'Masukkan ke tempat sampah UBC',
    ],
  },
  {
    id: 'carton',
    name: 'Karton',
    nameFull: 'Karton & Kardus',
    description: 'Kemasan kardus dan karton dari berbagai produk',
    icon: '📦',
    color: 'carton',
    lightColor: 'carton-light',
    points: 10,
    correctExamples: [
      'Kardus kemasan produk',
      'Kotak sepatu',
      'Kemasan makanan kering',
    ],
    incorrectExamples: [
      'Kardus basah atau lembab',
      'Kardus berminyak (pizza)',
      'Karton berlapis plastik tebal',
    ],
    instructions: [
      'Pastikan karton dalam kondisi kering',
      'Lepaskan selotip dan label plastik',
      'Lipat atau ratakan kardus',
      'Masukkan ke tempat sampah Karton',
    ],
  },
  {
    id: 'flex-plastic',
    name: 'Flex Plastic',
    nameFull: 'Plastik Fleksibel',
    description: 'Kemasan plastik lentur seperti bungkus snack',
    icon: '🍬',
    color: 'flex-plastic',
    lightColor: 'flex-plastic-light',
    points: 12,
    correctExamples: [
      'Bungkus snack (bersih)',
      'Kemasan mie instan',
      'Plastik pembungkus produk',
    ],
    incorrectExamples: [
      'Plastik berminyak/kotor',
      'Plastik berlapis aluminium',
      'Styrofoam',
    ],
    instructions: [
      'Bersihkan sisa makanan',
      'Keringkan plastik',
      'Kumpulkan dalam satu wadah',
      'Masukkan ke tempat sampah Flex Plastic',
    ],
  },
  {
    id: 'pet',
    name: 'PET',
    nameFull: 'Botol Plastik PET',
    description: 'Botol plastik minuman dengan simbol PET',
    icon: '🍼',
    color: 'pet',
    lightColor: 'pet-light',
    points: 15,
    correctExamples: [
      'Botol air mineral',
      'Botol minuman ringan',
      'Botol jus plastik bening',
    ],
    incorrectExamples: [
      'Botol dengan cairan di dalam',
      'Botol oli atau kimia',
      'Botol plastik berwarna gelap',
    ],
    instructions: [
      'Kosongkan semua cairan',
      'Lepaskan tutup botol',
      'Bilas dengan air bersih',
      'Tekan botol untuk menghemat ruang',
      'Masukkan ke tempat sampah PET',
    ],
  },
  {
    id: 'aluminium',
    name: 'Aluminium',
    nameFull: 'Kaleng Aluminium',
    description: 'Kaleng minuman dan makanan berbahan aluminium',
    icon: '🥫',
    color: 'aluminium',
    lightColor: 'aluminium-light',
    points: 20,
    correctExamples: [
      'Kaleng minuman soda',
      'Kaleng bir',
      'Kaleng makanan (bersih)',
    ],
    incorrectExamples: [
      'Kaleng dengan sisa makanan',
      'Kaleng aerosol',
      'Kaleng cat',
    ],
    instructions: [
      'Kosongkan semua isi',
      'Bilas kaleng dengan air',
      'Tekan kaleng jika memungkinkan',
      'Masukkan ke tempat sampah Aluminium',
    ],
  },
];

export const getCategoryById = (id: string): CategoryInfo | undefined => {
  return categories.find(cat => cat.id === id);
};
