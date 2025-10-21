// src/data/statesData.ts

// ✅ Define structure for type safety
export type StateInfo = {
  id: string;
  name: string;
  region: "Northern" | "Southern" | "Eastern" | "Western";
  heroImage: string;
  description: string;
  path: string;
  famousItems: { id: string; title: string; price: number; img: string }[];
};

// ✅ States and major cities dataset
export const indianStates = [
  { name: "Andhra Pradesh", cities: ["Hyderabad", "Visakhapatnam", "Vijayawada", "Tirupati"] },
  { name: "Punjab", cities: ["Chandigarh", "Amritsar", "Ludhiana", "Patiala"] },
  { name: "Kerala", cities: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur"] },
  { name: "Uttar Pradesh", cities: ["Lucknow", "Agra", "Varanasi", "Kanpur"] },
  { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nashik", "Aurangabad"] },
  { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"] },
  { name: "Rajasthan", cities: ["Jaipur", "Udaipur", "Jodhpur", "Kota"] },
  { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Salem"] },
];

// ✅ Main states data used in cards / UI
const statesData: StateInfo[] = [
  {
    id: "maharashtra",
    name: "Maharashtra",
    region: "Western",
    heroImage:
      "https://cdn.pixabay.com/photo/2022/01/19/08/46/mumbai-6949194_1280.jpg",
    description:
      "Maharashtra is home to Mumbai, Ajanta-Ellora Caves, and diverse landscapes from beaches to hill stations.",
    path: "/states/maharashtra",
    famousItems: [
      { id: "1", title: "Paithani Saree", price: 1800, img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Paithani_saree.jpg" },
      { id: "2", title: "Worli Painting", price: 950, img: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Warli_art.jpg" },
    ],
  },
  {
    id: "kerala",
    name: "Kerala",
    region: "Southern",
    heroImage:
      "https://c4.wallpaperflare.com/wallpaper/587/946/340/india-asia-forest-river-wallpaper-preview.jpg",
    description:
      "God’s Own Country — Kerala is famous for its backwaters, Ayurveda, Kathakali dance, and scenic greenery.",
    path: "/states/kerala",
    famousItems: [
      { id: "1", title: "Spices Pack", price: 400, img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Variety_of_spices_%283306563646%29.jpg" },
      { id: "2", title: "Kathakali Mask", price: 1200, img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Kathakali_performance%2C_Muscat.jpg" },
    ],
  },
  {
    id: "uttarpradesh",
    name: "Uttar Pradesh",
    region: "Northern",
    heroImage:
      "https://wa-global-assets.s3.ap-south-1.amazonaws.com/blog_image/qmfFi2hCww8NAM56DTA3Ab61FgiPdBpl1Enumeo2.png",
    description:
      "Home to the Taj Mahal, Uttar Pradesh is the heart of Indian culture, heritage, and history.",
    path: "/states/uttarpradesh",
    famousItems: [
      { id: "1", title: "Petha (Agra Sweet)", price: 120, img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Petha_making.jpg" },
      { id: "2", title: "Brassware of Moradabad", price: 800, img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Brassware%2C_India.jpg" },
    ],
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    region: "Western",
    heroImage:
      "https://s7ap1.scene7.com/is/image/incredibleindia/2-mehrangarh-fort-jodhpur-rajasthan-city-hero?qlt=82&ts=1726660925514",
    description:
      "The Land of Kings — Rajasthan is known for forts, palaces, deserts, folk music, and royal heritage.",
    path: "/states/rajasthan",
    famousItems: [
      { id: "1", title: "Blue Pottery", price: 900, img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Blue_Pottery_Jaipur.jpg" },
      { id: "2", title: "Rajasthani Mojari", price: 750, img: "https://upload.wikimedia.org/wikipedia/commons/6/68/Mojari_2.jpg" },
    ],
  },
];

export default statesData;
