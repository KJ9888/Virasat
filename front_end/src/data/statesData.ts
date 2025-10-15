// small dataset for states. Add more details/images as you like.
export type StateInfo = {
  id: string;
  name: string;
  heroImage: string;
  description: string;
  famousItems: { id: string; title: string; price: number; img: string }[];
};

// Indian states and major cities data
export const indianStates = [
  { name: "Andhra Pradesh", cities: ["Hyderabad", "Visakhapatnam", "Vijayawada", "Tirupati"] },
  { name: "Arunachal Pradesh", cities: ["Itanagar", "Tawang", "Bomdila"] },
  { name: "Assam", cities: ["Guwahati", "Dibrugarh", "Jorhat", "Silchar"] },
  { name: "Bihar", cities: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur"] },
  { name: "Chhattisgarh", cities: ["Raipur", "Bilaspur", "Durg", "Korba"] },
  { name: "Goa", cities: ["Panaji", "Margao", "Vasco da Gama", "Mapusa"] },
  { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar"] },
  { name: "Haryana", cities: ["Chandigarh", "Gurgaon", "Faridabad", "Panipat"] },
  { name: "Himachal Pradesh", cities: ["Shimla", "Manali", "Dharamshala", "Kullu"] },
  { name: "Jharkhand", cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"] },
  { name: "Karnataka", cities: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"] },
  { name: "Kerala", cities: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kannur"] },
  { name: "Madhya Pradesh", cities: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"] },
  { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"] },
  { name: "Manipur", cities: ["Imphal", "Thoubal", "Bishnupur"] },
  { name: "Meghalaya", cities: ["Shillong", "Tura", "Jowai"] },
  { name: "Mizoram", cities: ["Aizawl", "Lunglei", "Saiha"] },
  { name: "Nagaland", cities: ["Kohima", "Dimapur", "Mokokchung"] },
  { name: "Odisha", cities: ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur"] },
  { name: "Punjab", cities: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"] },
  { name: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer"] },
  { name: "Sikkim", cities: ["Gangtok", "Namchi", "Mangan"] },
  { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem"] },
  { name: "Telangana", cities: ["Hyderabad", "Warangal", "Nizamabad", "Khammam"] },
  { name: "Tripura", cities: ["Agartala", "Dharmanagar", "Udaipur"] },
  { name: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut", "Ghaziabad"] },
  { name: "Uttarakhand", cities: ["Dehradun", "Haridwar", "Rishikesh", "Nainital", "Mussoorie"] },
  { name: "West Bengal", cities: ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"] },
  { name: "Delhi", cities: ["New Delhi", "Central Delhi", "East Delhi", "West Delhi"] },
  { name: "Jammu and Kashmir", cities: ["Srinagar", "Jammu", "Leh", "Kargil"] },
  { name: "Ladakh", cities: ["Leh", "Kargil", "Drass"] },
];

const states: StateInfo[] = [
  {
    id: "Maharashtra",
    name: "Maharashtra",
    heroImage:
      "https://cdn.pixabay.com/photo/2022/01/19/08/46/mumbai-6949194_1280.jpg",
    description: "Land of palaces, forts and deserts.",
    famousItems: [
      { id: "1", title: "Bandhani Saree", price: 1500, img: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Bandhani_Saree.jpg" },
      { id: "2", title: "Miniature Painting", price: 2500, img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Mughal_painting.jpg" },
    ],
  },
  {
    id: "kerala",
    name: "Kerala",
    heroImage:
      "https://i.ytimg.com/vi/BORNLlknFKU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBbNwwZScvSw-Yi4y3n_UQpz0-6aw",
    description: "God's Own Country — backwaters and green landscapes.",
    famousItems: [
      { id: "1", title: "Spices Pack", price: 400, img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Variety_of_spices_%283306563646%29.jpg" },
      { id: "2", title: "Kathakali Mask", price: 1200, img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Kathakali_performance%2C_Muscat.jpg" },
    ],
  },
  {
    id: "uttarpradesh",
    name: "Uttar Pradesh",
    heroImage:
      "https://wa-global-assets.s3.ap-south-1.amazonaws.com/blog_image/qmfFi2hCww8NAM56DTA3Ab61FgiPdBpl1Enumeo2.png",
    description: "Home of the Taj, rich cultural history.",
    famousItems: [
      { id: "1", title: "Petha (Sweet)", price: 120, img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Petha_making.jpg" },
      { id: "2", title: "Brassware", price: 800, img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Brassware%2C_India.jpg" },
    ],
  },
];

export default states;