// Shared dataset and helpers for all pages.
// Keep this file ONLY for data/types/helpers.

export type Monument = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  path: string;
  tag?: string;      // e.g., UNESCO, Memorial
  city?: string;     // e.g., Delhi
  era?: string;      // e.g., Mughal
  width: number;     // intrinsic width to prevent CLS
  height: number;    // intrinsic height to prevent CLS
  popularity?: number;
};

export const monumentsData: Monument[] = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    description: "Agra's white marble monument built by Shah Jahan.",
    imageUrl: "https://orlandostylemagazine.com/wp-content/uploads/2023/09/views-entrance-indian-temple.jpg",
    path: "/monuments/taj-mahal",
    tag: "UNESCO",
    city: "Agra",
    era: "Mughal",
    width: 1200,
    height: 800,
    popularity: 99
  },
  {
    id: "qutub-minar",
    name: "Qutub Minar",
    description: "A UNESCO site in Delhi — tall brick minaret.",
    imageUrl: "https://media.istockphoto.com/id/1262751678/video/aerial-view-of-qutub-minar-in-delhi-india.jpg?s=640x640&k=20&c=2C__Z9ms9MgyoKjbrdUTx3KXTaV7WSFzGspCAXoKt74=",
    path: "/monuments/qutub-minar",
    tag: "UNESCO",
    city: "Delhi",
    era: "Sultanate",
    width: 1200,
    height: 800,
    popularity: 92
  },
  {
    id: "red-fort",
    name: "Red Fort",
    description: "Delhi’s iconic fort and a UNESCO World Heritage Site.",
    imageUrl: "https://thefederal.com/file/2023/01/iStock-1369987507.jpg",
    path: "/monuments/red-fort",
    tag: "UNESCO",
    city: "Delhi",
    era: "Mughal",
    width: 1200,
    height: 800,
    popularity: 94
  },
  {
    id: "hawa-mahal",
    name: "Hawa Mahal",
    description: "A stunning palace in Jaipur known for its unique architecture.",
    imageUrl: "https://static.toiimg.com/thumb/msid-103378759,width-748,height-499,resizemode=4,imgsize-147006/.jpg",
    path: "/monuments/hawa-mahal",
    tag: "Architect’s Pick",
    city: "Jaipur",
    era: "Rajput",
    width: 1200,
    height: 800,
    popularity: 90
  },
  {
    id: "gateway-of-india",
    name: "Gateway of India",
    description: "A monumental archway in Mumbai, overlooking the Arabian Sea.",
    imageUrl: "https://media1.thrillophilia.com/filestore/a6xfgd96rla05y092cy5emcpi9pu_1574833817_shutterstock_566137291.jpg?w=400&dpr=2",
    path: "/monuments/gateway-of-india",
    tag: "Family Friendly",
    city: "Mumbai",
    era: "Colonial",
    width: 1200,
    height: 800,
    popularity: 88
  },
  {
    id: "india-gate",
    name: "India Gate",
    description: "India Gate in New Delhi honors soldiers who died in World War I.",
    imageUrl: "https://s7ap1.scene7.com/is/image/incredibleindia/india-gate-delhi-4-attr-hero?qlt=82&ts=1742167548398",
    path: "/monuments/india-gate",
    tag: "Memorial",
    city: "Delhi",
    era: "Colonial",
    width: 1200,
    height: 800,
    popularity: 89
  },
  {
    id: "charminar",
    name: "Charminar",
    description: "A historical monument located in Hyderabad.",
    imageUrl: "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Charminar_600.jpg",
    path: "/monuments/charminar",
    tag: "Qutb Shahi",
    city: "Hyderabad",
    era: "Sultanate",
    width: 1200,
    height: 800,
    popularity: 86
  },
  {
    id: "ajanta-caves",
    name: "Ajanta Caves",
    description: "A UNESCO World Heritage Site featuring ancient rock-cut caves.",
    imageUrl: "https://media.istockphoto.com/id/504514053/photo/ajanta-cave-no-26.jpg?s=612x612&w=0&k=20&c=Sti1IrwnaUbm8PB07qEWlODUo8wo8jGwmsEnCkZKZTU=",
    path: "/monuments/ajanta-caves",
    tag: "UNESCO",
    city: "Aurangabad",
    era: "Ancient",
    width: 1200,
    height: 800,
    popularity: 87
  },
  {
    id: "konark-sun-temple",
    name: "Sun Temple, Konark",
    description: "A historical monument located in Odisha.",
    imageUrl: "https://kirtankar.com/wp-content/uploads/2025/04/konark-sun-temple-1024x576.webp",
    path: "/monuments/konark-sun-temple",
    tag: "Temple",
    city: "Puri",
    era: "Medieval",
    width: 1200,
    height: 800,
    popularity: 91
  }
];

export const uniq = (arr: (string | undefined)[]) =>
  Array.from(new Set(arr.filter(Boolean))) as string[];

export const allCities = uniq(monumentsData.map(m => m.city));
export const allEras = uniq(monumentsData.map(m => m.era));
export const allTags = uniq(monumentsData.map(m => m.tag));

export const shuffle = <T,>(a: T[], seed = Date.now()) => {
  // deterministic shuffle if seed passed
  let s = seed % 2147483647;
  const next = () => (s = (s * 48271) % 2147483647);
  const arr = [...a];
  for (let i = arr.length - 1; i > 0; i--) {
    const r = next() / 2147483647;
    const j = Math.floor(r * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};
