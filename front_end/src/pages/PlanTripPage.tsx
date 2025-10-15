import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Animation from "../components/Animation";
import InteractiveMap from "../components/InteractiveMap.tsx";
import { indianStates } from "../data/statesData";
import {
  Plane,
  Train,
  Car,
  Ship,
  ArrowRight,
  Clock,
  MapPin,
  Sparkles,
  Mountain as MountainIcon,
  Waves,
  Building2,
  Palmtree,
  Camera,
  Utensils,
  Users,
  Calendar as CalendarIcon,
  ArrowLeftRight,
  Navigation as NavigationIcon,
  IndianRupee,
  Star,
  Share2,
  Download,
  Hotel,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const travelOptions = ["Flight", "Train", "Bus", "Car"];

type Route = {
  id: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  mode: string;
  highlights: string[];
  image: string;
};

const routes: Route[] = [
  {
    id: "delhi-agra",
    from: "Delhi",
    to: "Agra",
    distance: "230 km",
    duration: "3-4 hours",
    mode: "Train",
    highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
    image: "https://images.unsplash.com/photo-1580734075281-1c4b9d67dcb3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "mumbai-goa",
    from: "Mumbai",
    to: "Goa",
    distance: "580 km",
    duration: "10-12 hours",
    mode: "Road",
    highlights: ["Beaches", "Portuguese Heritage", "Nightlife"],
    image: "https://images.unsplash.com/photo-1529336953121-ad3c1110462b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "bangalore-mysore",
    from: "Bangalore",
    to: "Mysore",
    distance: "150 km",
    duration: "3 hours",
    mode: "Road",
    highlights: ["Mysore Palace", "Chamundi Hills", "Gardens"],
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "kolkata-darjeeling",
    from: "Kolkata",
    to: "Darjeeling",
    distance: "640 km",
    duration: "12-14 hours",
    mode: "Train",
    highlights: ["Tea Gardens", "Himalayan Views", "Toy Train"],
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200&auto=format&fit=crop",
  },
];

const experiences = [
  {
    icon: MountainIcon,
    title: "Mountain Adventures",
    description: "Trek through the Himalayas and explore hill stations",
    locations: ["Ladakh", "Manali", "Shimla"],
    color: "bg-emerald-600",
    gradient: "from-emerald-600/20 to-emerald-600/5",
    image: "https://images.unsplash.com/photo-1529927054740-2153cf8608b6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Waves,
    title: "Coastal Escapes",
    description: "Relax on pristine beaches and enjoy water sports",
    locations: ["Goa", "Kerala", "Andaman"],
    color: "bg-sky-600",
    gradient: "from-sky-600/20 to-sky-600/5",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Building2,
    title: "Heritage Tours",
    description: "Discover ancient forts, palaces, and monuments",
    locations: ["Rajasthan", "Delhi", "Hampi"],
    color: "bg-amber-600",
    gradient: "from-amber-600/20 to-amber-600/5",
    image: "https://images.unsplash.com/photo-1587248720329-9625ea1db8d2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Palmtree,
    title: "Wildlife Safaris",
    description: "Spot tigers, elephants, and exotic birds",
    locations: ["Ranthambore", "Jim Corbett", "Kaziranga"],
    color: "bg-lime-600",
    gradient: "from-lime-600/20 to-lime-600/5",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description: "Capture stunning landscapes and vibrant culture",
    locations: ["Varanasi", "Jaipur", "Udaipur"],
    color: "bg-fuchsia-600",
    gradient: "from-fuchsia-600/20 to-fuchsia-600/5",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: Utensils,
    title: "Culinary Journeys",
    description: "Taste authentic regional cuisines and street food",
    locations: ["Mumbai", "Kolkata", "Hyderabad"],
    color: "bg-rose-600",
    gradient: "from-rose-600/20 to-rose-600/5",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",
  },
];

const TravelModesGrid: React.FC = () => {
  const modes = [
    {
      icon: Plane,
      name: "Flight",
      description: "Fast and convenient for long distances",
      duration: "2-4 hours",
      color: "text-fuchsia-600",
      bgColor: "bg-fuchsia-600/10",
      hoverBg: "group-hover:bg-fuchsia-600",
    },
    {
      icon: Train,
      name: "Train",
      description: "Scenic routes across diverse landscapes",
      duration: "8-24 hours",
      color: "text-emerald-600",
      bgColor: "bg-emerald-600/10",
      hoverBg: "group-hover:bg-emerald-600",
    },
    {
      icon: Car,
      name: "Road Trip",
      description: "Flexible travel at your own pace",
      duration: "6-12 hours",
      color: "text-sky-600",
      bgColor: "bg-sky-600/10",
      hoverBg: "group-hover:bg-sky-600",
    },
    {
      icon: Ship,
      name: "Cruise",
      description: "Coastal and river journeys",
      duration: "1-7 days",
      color: "text-amber-600",
      bgColor: "bg-amber-600/10",
      hoverBg: "group-hover:bg-amber-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {modes.map((mode) => {
        const Icon = mode.icon;
        return (
          <div
            key={mode.name}
            className="group cursor-pointer border-2 border-white/10 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-white/20 hover:-translate-y-1 bg-black/20"
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`rounded-2xl ${mode.bgColor} p-5 ${mode.color} transition-all duration-300 ${mode.hoverBg} group-hover:text-white group-hover:shadow-lg`}
              >
                <Icon className="h-10 w-10" strokeWidth={1.5} />
              </div>
              <h4 className="mt-6 font-semibold text-xl tracking-tight">{mode.name}</h4>
              <p className="mt-3 text-sm text-gray-300 text-pretty leading-relaxed">{mode.description}</p>
              <div className="mt-4 rounded-full bg-white/10 px-4 py-1.5">
                <p className="text-xs font-semibold text-white">Avg. {mode.duration}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const PopularRoutesGrid: React.FC = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {routes.map((route) => (
        <div
          key={route.id}
          className="group overflow-hidden border-2 border-white/10 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:border-white/20 bg-black/20"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={route.image}
              alt={`${route.from} to ${route.to}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute top-4 right-4 bg-fuchsia-600 text-white shadow-lg px-3 py-1.5 text-xs font-semibold rounded-full">
              {route.mode}
            </div>
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-center gap-3 text-xl font-bold">
              <span className="text-white">{route.from}</span>
              <ArrowRight className="h-5 w-5 text-fuchsia-500 transition-transform group-hover:translate-x-1" />
              <span className="text-white">{route.to}</span>
            </div>
            <div className="mt-5 flex items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-fuchsia-600/10 p-1.5">
                  <MapPin className="h-4 w-4 text-fuchsia-400" />
                </div>
                <span className="font-medium">{route.distance}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-emerald-600/10 p-1.5">
                  <Clock className="h-4 w-4 text-emerald-400" />
                </div>
                <span className="font-medium">{route.duration}</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-3">Top Highlights</p>
              <div className="flex flex-wrap gap-2">
                {route.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-fuchsia-600 hover:text-white transition-colors"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
            <button
              className="mt-8 w-full h-12 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all group"
            >
              View Route Details
              <ArrowRight className="ml-2 h-4 w-4 inline-block align-middle" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const ExperienceCardsGrid: React.FC = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {experiences.map((experience) => {
        const Icon = experience.icon as React.ComponentType<{ className?: string; strokeWidth?: number }>;
        return (
          <div
            key={experience.title}
            className="group cursor-pointer overflow-hidden border-2 border-white/10 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-white/20 hover:-translate-y-1 bg-black/20 relative"
          >
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <img src={experience.image} alt={experience.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex rounded-xl bg-black/50 backdrop-blur p-3 text-white shadow-lg">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
            </div>
            <div className="relative p-8">
              <h4 className="font-semibold text-xl text-white tracking-tight">{experience.title}</h4>
              <p className="mt-3 text-sm text-gray-300 text-pretty leading-relaxed">{experience.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.locations.map((location) => (
                  <span
                    key={location}
                    className="text-xs font-medium px-3 py-1 border-2 border-white/20 rounded-full text-white hover:bg-fuchsia-600 hover:text-white hover:border-fuchsia-600 transition-colors"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Flight and Train booking data
type FlightOption = {
  id: string;
  airline: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
  stops: string;
  logo: string;
};

type TrainOption = {
  id: string;
  trainName: string;
  trainNumber: string;
  departure: string;
  arrival: string;
  duration: string;
  classes: { name: string; price: number; available: boolean }[];
  image: string;
};

const flightOptions: FlightOption[] = [
  {
    id: "1",
    airline: "Air India",
    flightNumber: "AI-101",
    departure: "06:00",
    arrival: "08:30",
    duration: "2h 30m",
    price: 8500,
    stops: "Non-stop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Air_India_Logo.svg"
  },
  {
    id: "2",
    airline: "IndiGo",
    flightNumber: "6E-205",
    departure: "14:15",
    arrival: "16:45",
    duration: "2h 30m",
    price: 7200,
    stops: "Non-stop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/IndiGo_logo.svg"
  },
  {
    id: "3",
    airline: "SpiceJet",
    flightNumber: "SG-8156",
    departure: "19:30",
    arrival: "22:00",
    duration: "2h 30m",
    price: 6800,
    stops: "Non-stop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/SpiceJet_Logo.svg"
  }
];

const trainOptions: TrainOption[] = [
  {
    id: "1",
    trainName: "Rajdhani Express",
    trainNumber: "12001",
    departure: "16:35",
    arrival: "06:10+1",
    duration: "13h 35m",
    classes: [
      { name: "AC 1st Class", price: 4500, available: true },
      { name: "AC 2 Tier", price: 2800, available: true },
      { name: "AC 3 Tier", price: 1950, available: false }
    ],
    image: "https://images.unsplash.com/photo-1505575972945-280edc575622?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "2",
    trainName: "Shatabdi Express",
    trainNumber: "12002",
    departure: "06:00",
    arrival: "11:30",
    duration: "5h 30m",
    classes: [
      { name: "AC Chair Car", price: 1200, available: true },
      { name: "Executive Class", price: 2400, available: true }
    ],
    image: "https://images.unsplash.com/photo-1543589077-27b5d0ae1f2c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "3",
    trainName: "Duronto Express",
    trainNumber: "12213",
    departure: "22:20",
    arrival: "11:00+1",
    duration: "12h 40m",
    classes: [
      { name: "AC 2 Tier", price: 2600, available: true },
      { name: "AC 3 Tier", price: 1800, available: true }
    ],
    image: "https://images.unsplash.com/photo-1606811971618-448697336912?q=80&w=1200&auto=format&fit=crop"
  }
];

// Trip packages
type TripPackage = {
  id: string;
  title: string;
  durationNights: number;
  from: string;
  to: string;
  pricePerPerson: number;
  rating: number;
  inclusions: string[];
  thumbnail: string;
};

const tripPackages: TripPackage[] = [
  {
    id: "pkg-rajasthan-heritage",
    title: "Rajasthan Heritage Circuit",
    durationNights: 6,
    from: "Delhi",
    to: "Jaipur · Jodhpur · Udaipur",
    pricePerPerson: 28999,
    rating: 4.7,
    inclusions: ["3★/4★ Hotels", "Breakfast", "Sightseeing", "AC Transfers"],
    thumbnail: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "pkg-kerala-backwaters",
    title: "Kerala Backwaters & Hills",
    durationNights: 5,
    from: "Kochi",
    to: "Munnar · Alleppey · Thekkady",
    pricePerPerson: 25999,
    rating: 4.6,
    inclusions: ["Houseboat", "Breakfast & Dinner", "Sightseeing", "Transfers"],
    thumbnail: "https://images.unsplash.com/photo-1588269845580-7288edcb0f8b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "pkg-goa-beaches",
    title: "Goa Beaches & Nightlife",
    durationNights: 4,
    from: "Mumbai",
    to: "North & South Goa",
    pricePerPerson: 19999,
    rating: 4.5,
    inclusions: ["Beach Resort", "Breakfast", "Local Transfers"],
    thumbnail: "https://images.unsplash.com/photo-1620516961640-e59f5f25fbe1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "pkg-golden-triangle",
    title: "Golden Triangle Express",
    durationNights: 3,
    from: "Delhi",
    to: "Agra · Jaipur",
    pricePerPerson: 14999,
    rating: 4.4,
    inclusions: ["3★ Hotels", "Breakfast", "Guided Tours", "AC Sedan"],
    thumbnail: "https://images.unsplash.com/photo-1578926374376-4a0efc02f77f?q=80&w=1200&auto=format&fit=crop",
  },
];

// Personalized tours and guides
type TourGuide = {
  id: string;
  city: string;
  title: string;
  tags: string[]; // e.g., heritage, food, wildlife
  durationHours: number;
  pricePerPerson: number;
  rating: number;
  provider: string;
  image: string;
};

const tourGuides: TourGuide[] = [
  {
    id: "tour-jaipur-heritage",
    city: "Jaipur",
    title: "Jaipur Pink City Heritage Walk",
    tags: ["heritage", "food"],
    durationHours: 4,
    pricePerPerson: 1200,
    rating: 4.8,
    provider: "Local City Guide Co.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e78?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tour-udaipur-lakes",
    city: "Udaipur",
    title: "Udaipur Lakes & Palaces Tour",
    tags: ["heritage"],
    durationHours: 5,
    pricePerPerson: 1500,
    rating: 4.7,
    provider: "Royal Trails",
    image: "https://images.unsplash.com/photo-1625398407411-bf66d62f37a9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tour-goa-beach-food",
    city: "Goa",
    title: "Goa Beach Hopping & Food Crawl",
    tags: ["beach", "food"],
    durationHours: 6,
    pricePerPerson: 1800,
    rating: 4.6,
    provider: "Coastal Explorers",
    image: "https://images.unsplash.com/photo-1544551763-7ef4200fbf81?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tour-corbett-safari",
    city: "Jim Corbett",
    title: "Corbett Tiger Reserve Safari",
    tags: ["wildlife", "adventure"],
    durationHours: 3,
    pricePerPerson: 2200,
    rating: 4.5,
    provider: "Eco Safaris",
    image: "https://images.unsplash.com/photo-1516893846135-1e2f6f66c931?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tour-delhi-food",
    city: "Delhi",
    title: "Old Delhi Street Food Trail",
    tags: ["food", "heritage"],
    durationHours: 3,
    pricePerPerson: 900,
    rating: 4.9,
    provider: "Dilli Bites",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop",
  },
];

const PlanTripPage: React.FC = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedMode, setSelectedMode] = useState<"flight" | "train">("flight");
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  const [plannerOpen, setPlannerOpen] = useState(true);

  // Planner state
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [adults, setAdults] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [hotelClass, setHotelClass] = useState<"3" | "4" | "5">("3");
  const [budgetLevel, setBudgetLevel] = useState<"economy" | "standard" | "premium">("standard");
  const [interests, setInterests] = useState<string[]>(["heritage"]);

  // Persist planner in localStorage
  React.useEffect(() => {
    const saved = localStorage.getItem("virasat_trip_planner");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setTripType(data.tripType ?? "one-way");
        setOrigin(data.origin ?? "");
        setDestination(data.destination ?? "");
        setStartDate(data.startDate ?? "");
        setEndDate(data.endDate ?? "");
        setAdults(data.adults ?? 1);
        setChildren(data.children ?? 0);
        setHotelClass(data.hotelClass ?? "3");
        setBudgetLevel(data.budgetLevel ?? "standard");
        setInterests(Array.isArray(data.interests) ? data.interests : ["heritage"]);
      } catch {}
    }
  }, []);

  React.useEffect(() => {
    const payload = {
      tripType,
      origin,
      destination,
      startDate,
      endDate,
      adults,
      children,
      hotelClass,
      budgetLevel,
      interests,
    };
    localStorage.setItem("virasat_trip_planner", JSON.stringify(payload));
  }, [tripType, origin, destination, startDate, endDate, adults, children, hotelClass, budgetLevel, interests]);

  const toggleInterest = (tag: string) => {
    setInterests((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const nightsBetween = React.useMemo(() => {
    if (!startDate || !endDate) return 0;
    const s = new Date(startDate);
    const e = new Date(endDate);
    const diff = Math.max(0, e.getTime() - s.getTime());
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }, [startDate, endDate]);

  const estimateCost = React.useMemo(() => {
    const travelers = adults + children * 0.6; // kids discounted weight
    const basePerNight = budgetLevel === "economy" ? 1800 : budgetLevel === "premium" ? 4200 : 2800;
    const hotelMultiplier = hotelClass === "5" ? 2 : hotelClass === "4" ? 1.4 : 1;
    const interestAddon = interests.length * 500; // activities bundle
    const transport = selectedMode === "flight" ? 4500 : 1800; // approx per traveler
    const total = (nightsBetween * basePerNight * hotelMultiplier + interestAddon) * travelers + transport * travelers;
    return Math.max(0, Math.round(total));
  }, [adults, children, budgetLevel, hotelClass, interests, nightsBetween, selectedMode]);

  const generatedItinerary = React.useMemo(() => {
    const items: { day: number; title: string; details: string }[] = [];
    const themes = interests.length ? interests : ["heritage"];
    const pool: Record<string, string[]> = {
      heritage: ["Old City Walk", "Fort & Museum", "UNESCO Site", "Local Handicrafts"],
      adventure: ["Morning Trek", "Ridge View", "River Rafting", "Campfire"],
      beach: ["Sunrise Beach", "Water Sports", "Lighthouse", "Beach Shack"],
      food: ["Street Food Trail", "Cooking Class", "Spice Market", "Cafe Hopping"],
      wildlife: ["Safari Drive", "Bird Watching", "Nature Walk", "Eco Center"],
    };
    const n = Math.min(6, Math.max(1, nightsBetween));
    for (let i = 1; i <= n; i++) {
      const theme = themes[(i - 1) % themes.length] as keyof typeof pool;
      const options = pool[theme];
      const title = `${theme[0].toUpperCase()}${theme.slice(1)} Day`;
      const details = options[i % options.length];
      items.push({ day: i, title, details });
    }
    return items;
  }, [interests, nightsBetween]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tripData = { from: origin, to: destination, startDate: "", endDate: "", passengers: 1, travelType: tripType };
    navigate("/finalall", { state: tripData });
  };

  return (
    <div className="relative min-h-screen text-white">
      <Header />
      <Animation />

      {/* Hero + Booking Form */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1974&auto=format&fit=crop"
            alt="Kerala Backwaters"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        </div>

        <div className="relative h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center px-4">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center drop-shadow-2xl tracking-tight">
              Get. Set. Travel.
            </h2>
          </div>

          <div className="container mx-auto px-4 pb-8 md:pb-12 md:px-6">
            <div className="mx-auto max-w-6xl bg-white/10 backdrop-blur-xl shadow-2xl p-6 md:p-8 border-2 border-white/10 rounded-2xl">
              {/* Trip Type */}
              <div className="flex gap-6 mb-6">
                <button
                  className={`px-4 py-2 rounded-full text-sm font-semibold border ${tripType === "one-way" ? "bg-white text-black" : "border-white/30"}`}
                  onClick={() => setTripType("one-way")}
                >
                  One Way
                </button>
                <button
                  className={`px-4 py-2 rounded-full text-sm font-semibold border ${tripType === "round-trip" ? "bg-white text-black" : "border-white/30"}`}
                  onClick={() => setTripType("round-trip")}
                >
                  Round Trip
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-5 md:gap-3">
                <div className="md:col-span-1">
                  <label className="text-xs font-semibold text-gray-200 mb-1 block uppercase tracking-wide">From</label>
                  <select
                    className="h-12 w-full bg-transparent border-b-2 border-white/30 focus:outline-none focus:border-white font-medium text-white"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                  >
                    <option value="" className="bg-black text-white">Select City</option>
                    {indianStates.map((state) => (
                      <optgroup key={state.name} label={state.name} className="bg-black text-white">
                        {state.cities.map((city) => (
                          <option key={city} value={city} className="bg-black text-white">
                            {city}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div className="hidden md:flex items-end justify-center pb-2">
                  <button
                    type="button"
                    onClick={() => {
                      const temp = origin; setOrigin(destination); setDestination(temp);
                    }}
                    className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center"
                    aria-label="Swap"
                  >
                    <ArrowLeftRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="md:col-span-1">
                  <label className="text-xs font-semibold text-gray-200 mb-1 block uppercase tracking-wide">To</label>
                  <select
                    className="h-12 w-full bg-transparent border-b-2 border-white/30 focus:outline-none focus:border-white font-medium text-white"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  >
                    <option value="" className="bg-black text-white">Select City</option>
                    {indianStates.map((state) => (
                      <optgroup key={state.name} label={state.name} className="bg-black text-white">
                        {state.cities.map((city) => (
                          <option key={city} value={city} className="bg-black text-white">
                            {city}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-1">
                  <label className="text-xs font-semibold text-gray-200 mb-1 block uppercase tracking-wide">Depart On</label>
                  <div className="relative">
                    <input className="h-12 w-full bg-transparent border-b-2 border-white/30 focus:outline-none focus:border-white font-medium pr-8" placeholder="Select date" />
                    <CalendarIcon className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300" />
                  </div>
                </div>

                {tripType === "round-trip" && (
                  <div className="md:col-span-1">
                    <label className="text-xs font-semibold text-gray-200 mb-1 block uppercase tracking-wide">Return On</label>
                    <div className="relative">
                      <input className="h-12 w-full bg-transparent border-b-2 border-white/30 focus:outline-none focus:border-white font-medium pr-8" placeholder="Select date" />
                      <CalendarIcon className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300" />
                    </div>
                  </div>
                )}

                <div className="md:col-span-1">
                  <label className="text-xs font-semibold text-gray-200 mb-1 block uppercase tracking-wide">Travellers | Class</label>
                  <div className="relative">
                    <input className="h-12 w-full bg-transparent border-b-2 border-white/30 focus:outline-none focus:border-white font-medium pr-8" defaultValue="1 Traveller | Economy" />
                    <Users className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-300" />
                  </div>
                </div>

                <div className="md:col-span-5 lg:col-span-1 flex items-end">
                  <button 
                    type="button" 
                    onClick={() => setShowBookingOptions(true)}
                    className="w-full h-12 bg-white text-black font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                    disabled={!origin || !destination}
                  >
                    SEARCH
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sources / Attribution */}
      <section className="border-t border-white/10 bg-black/70 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h4 className="text-xl font-semibold text-white mb-4">Sources</h4>
          <ul className="text-sm text-gray-300 space-y-2 list-disc pl-5">
            <li>
              Map tiles & data © <a href="https://www.openstreetmap.org/copyright" className="underline hover:text-white" target="_blank" rel="noreferrer">OpenStreetMap contributors</a>
            </li>
            <li>
              Geocoding by <a href="https://nominatim.openstreetmap.org" className="underline hover:text-white" target="_blank" rel="noreferrer">Nominatim</a>
            </li>
            <li>
              Flight booking via <a href="https://www.makemytrip.com" className="underline hover:text-white" target="_blank" rel="noreferrer">MakeMyTrip</a> · Train booking via <a href="https://www.irctc.co.in" className="underline hover:text-white" target="_blank" rel="noreferrer">IRCTC</a>
            </li>
            <li>
              Sample flight/train details are illustrative and for demo purposes only
            </li>
            <li>
              Hero and route images from <a href="https://unsplash.com" className="underline hover:text-white" target="_blank" rel="noreferrer">Unsplash</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Booking Options Section */}
      {showBookingOptions && (
        <section className="border-t border-white/10 bg-gradient-to-b from-black/80 to-black/60 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h3 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">
                Book Your Journey
              </h3>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Choose from {origin} to {destination}
              </p>
            </div>

            {/* Mode Selection */}
            <div className="flex justify-center mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                <button
                  onClick={() => setSelectedMode("flight")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                    selectedMode === "flight"
                      ? "bg-white text-black shadow-lg"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <Plane className="inline-block w-5 h-5 mr-2" />
                  Flights
                </button>
                <button
                  onClick={() => setSelectedMode("train")}
                  className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                    selectedMode === "train"
                      ? "bg-white text-black shadow-lg"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  <Train className="inline-block w-5 h-5 mr-2" />
                  Trains
                </button>
              </div>
            </div>

            {/* Flight Options */}
            {selectedMode === "flight" && (
              <div className="space-y-6">
                {flightOptions.map((flight) => (
                  <div
                    key={flight.id}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex items-center gap-6">
                        <img src={flight.logo} alt={flight.airline} className="h-10 w-auto" />
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{flight.departure}</div>
                          <div className="text-sm text-gray-300">{origin}</div>
                        </div>
                        <div className="flex-1 text-center">
                          <div className="text-sm text-gray-300">{flight.duration}</div>
                          <div className="w-full h-px bg-white/20 my-2"></div>
                          <div className="text-xs text-gray-400">{flight.stops}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{flight.arrival}</div>
                          <div className="text-sm text-gray-300">{destination}</div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                        <div className="text-center">
                          <div className="text-sm text-gray-300">{flight.airline}</div>
                          <div className="text-xs text-gray-400">{flight.flightNumber}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-fuchsia-400">
                            ₹{flight.price.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-400">per person</div>
                        </div>
                        <button
                          onClick={() => window.open(`https://www.makemytrip.com/flights/search?from=${origin}&to=${destination}`, '_blank')}
                          className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold rounded-xl transition-all"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Train Options */}
            {selectedMode === "train" && (
              <div className="space-y-6">
                {trainOptions.map((train) => (
                  <div
                    key={train.id}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-0 overflow-hidden hover:bg-white/10 transition-all"
                  >
                    <div className="relative h-32 w-full overflow-hidden">
                      <img src={train.image} alt={train.trainName} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">{train.departure}</div>
                            <div className="text-sm text-gray-300">{origin}</div>
                          </div>
                          <div className="flex-1 text-center">
                            <div className="text-sm text-gray-300">{train.duration}</div>
                            <div className="w-full h-px bg-white/20 my-2"></div>
                            <div className="text-xs text-gray-400">Direct</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">{train.arrival}</div>
                            <div className="text-sm text-gray-300">{destination}</div>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0">
                          <div className="text-center mb-4">
                            <div className="text-sm text-gray-300">{train.trainName}</div>
                            <div className="text-xs text-gray-400">{train.trainNumber}</div>
                          </div>
                          <div className="flex flex-wrap gap-2 justify-center">
                            {train.classes.map((cls, index) => (
                              <div
                                key={index}
                                className={`px-3 py-2 rounded-lg text-xs font-medium ${
                                  cls.available
                                    ? "bg-emerald-600/20 text-emerald-300 border border-emerald-600/30"
                                    : "bg-gray-600/20 text-gray-400 border border-gray-600/30"
                                }`}
                              >
                                {cls.name}
                                <div className="font-bold">₹{cls.price}</div>
                              </div>
                            ))}
                          </div>
                          <div className="text-center mt-4">
                            <button
                              onClick={() => window.open(`https://www.irctc.co.in/nget/train-search`, '_blank')}
                              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all"
                            >
                              Book on IRCTC
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Alternative Booking Platforms */}
            <div className="mt-16 text-center">
              <h4 className="text-xl font-semibold text-white mb-6">Or book on popular platforms</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => window.open('https://www.makemytrip.com', '_blank')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all"
                >
                  MakeMyTrip
                </button>
                <button
                  onClick={() => window.open('https://www.goibibo.com', '_blank')}
                  className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl transition-all"
                >
                  Goibibo
                </button>
                <button
                  onClick={() => window.open('https://www.cleartrip.com', '_blank')}
                  className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-all"
                >
                  Cleartrip
                </button>
                <button
                  onClick={() => window.open('https://www.irctc.co.in', '_blank')}
                  className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl transition-all"
                >
                  IRCTC
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trip Packages */}
      <section className="border-t border-white/10 bg-black/70 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h3 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">Curated Trip Packages</h3>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Handpicked itineraries with stays, transfers and guided experiences</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tripPackages.map((pkg) => (
              <div key={pkg.id} className="group overflow-hidden border-2 border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={pkg.thumbnail} alt={pkg.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold">
                    {pkg.durationNights}N / {pkg.durationNights + 1}D
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white">{pkg.title}</h4>
                  <p className="mt-1 text-sm text-gray-300">{pkg.from} → {pkg.to}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <Star className="h-4 w-4 text-amber-400" />
                    <span className="text-sm font-medium">{pkg.rating.toFixed(1)}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {pkg.inclusions.map((inc) => (
                      <span key={inc} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 text-white">
                        {inc}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-2xl font-bold text-fuchsia-400">₹{pkg.pricePerPerson.toLocaleString()}</div>
                    <button
                      onClick={() => {
                        setOrigin(pkg.from);
                        setDestination(pkg.to.split(" · ")[0] ?? "");
                        setPlannerOpen(true);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="px-5 py-2.5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold rounded-xl"
                    >
                      Customize
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Planner */}
      <section className="border-t border-white/10 bg-gradient-to-b from-black to-black/60 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h3 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">Plan Your Trip</h3>
              <p className="mt-3 text-gray-300">Build a day-by-day plan and get an instant cost estimate</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const payload = localStorage.getItem("virasat_trip_planner") ?? "{}";
                  const file = new Blob([payload], { type: "application/json" });
                  const url = URL.createObjectURL(file);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "trip-plan.json";
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition-colors text-sm font-semibold"
                aria-label="Download plan JSON"
              >
                <Download className="inline-block w-4 h-4 mr-2" /> Export
              </button>
              <button
                onClick={async () => {
                  const payload = localStorage.getItem("virasat_trip_planner") ?? "{}";
                  try {
                    if ((navigator as any).share) {
                      await (navigator as any).share({ title: "Trip Plan", text: "Check out my trip plan", url: window.location.href });
                    } else {
                      await navigator.clipboard.writeText(payload);
                      alert("Plan copied to clipboard");
                    }
                  } catch {}
                }}
                className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition-colors text-sm font-semibold"
                aria-label="Share plan"
              >
                <Share2 className="inline-block w-4 h-4 mr-2" /> Share
              </button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Planner Form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-gray-200 mb-1 block uppercase tracking-wide">From</label>
                  <input value={origin} onChange={(e) => setOrigin(e.target.value)} placeholder="City" className="h-12 w-full bg-transparent border-b-2 border-white/30 focus:outline-none focus:border-white font-medium" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-200 mb-1 block uppercase tracking-wide">To</label>
                  <input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="City / Region" className="h-12 w-full bg-transparent border-b-2 border-white/30 focus:outline-none focus:border-white font-medium" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-200 mb-1 block uppercase tracking-wide">Start Date</label>
                  <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="h-12 w-full bg-transparent border-b-2 border-white/30 focus:outline-none focus:border-white font-medium" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-2 00 mb-1 block uppercase tracking-wide">End Date</label>
                  <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="h-12 w-full bg-transparent border-b-2 border-white/30 focus:outline-none focus:border-white font-medium" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-200 mb-1 block uppercase tracking-wide">Adults</label>
                  <input type="number" min={1} value={adults} onChange={(e) => setAdults(Number(e.target.value) || 1)} className="h-12 w-full bg-transparent border-b-2 border-white/30 focus:outline-none focus:border-white font-medium" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-200 mb-1 block uppercase tracking-wide">Children</label>
                  <input type="number" min={0} value={children} onChange={(e) => setChildren(Number(e.target.value) || 0)} className="h-12 w-full bg-transparent border-b-2 border-white/30 focus:outline-none focus:border-white font-medium" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-200 mb-1 block uppercase tracking-wide">Hotel Class</label>
                  <select value={hotelClass} onChange={(e) => setHotelClass(e.target.value as any)} className="h-12 w-full bg-transparent border-b-2 border-white/30 focus:outline-none focus:border-white font-medium">
                    <option className="bg-black" value="3">3★</option>
                    <option className="bg-black" value="4">4★</option>
                    <option className="bg-black" value="5">5★</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-200 mb-1 block uppercase tracking-wide">Budget</label>
                  <select value={budgetLevel} onChange={(e) => setBudgetLevel(e.target.value as any)} className="h-12 w-full bg-transparent border-b-2 border-white/30 focus:outline-none focus:border-white font-medium">
                    <option className="bg-black" value="economy">Economy</option>
                    <option className="bg-black" value="standard">Standard</option>
                    <option className="bg-black" value="premium">Premium</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold text-gray-200 mb-2 uppercase tracking-wide">Interests</p>
                <div className="flex flex-wrap gap-2">
                  {["heritage", "adventure", "beach", "food", "wildlife"].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleInterest(tag)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${
                        interests.includes(tag) ? "bg-fuchsia-600 border-fuchsia-600" : "border-white/30 hover:bg-white/10"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowBookingOptions(true)}
                  className="px-5 py-3 bg-white text-black font-bold rounded-xl shadow-lg hover:shadow-xl"
                >
                  Find Transport
                </button>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
                  className="px-5 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold rounded-xl"
                >
                  View Itinerary
                </button>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <IndianRupee className="h-5 w-5 text-fuchsia-400" />
                <p className="text-sm text-gray-300">Estimated total</p>
              </div>
              <div className="mt-2 text-4xl font-extrabold text-white">₹{estimateCost.toLocaleString()}</div>
              <p className="mt-1 text-xs text-gray-400">For {adults} adult(s){children ? ` and ${children} child(ren)` : ""}, {nightsBetween || 0} night(s)</p>

              <div className="mt-6 border-t border-white/10 pt-6">
                <h4 className="text-lg font-semibold">Itinerary Preview</h4>
                <div className="mt-4 space-y-3">
                  {generatedItinerary.length === 0 && (
                    <p className="text-sm text-gray-400">Select dates to generate a plan.</p>
                  )}
                  {generatedItinerary.map((d) => (
                    <div key={d.day} className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold">D{d.day}</div>
                      <div>
                        <p className="font-medium">{d.title}</p>
                        <p className="text-sm text-gray-300">{d.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => navigate("/finalall", { state: { from: origin, to: destination, startDate, endDate, passengers: adults + children, travelType: tripType } })}
                  className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl"
                >
                  Continue to Booking
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const params = new URLSearchParams();
                    if (destination) params.set("q", destination);
                    if (interests.length) params.set("tags", interests.join(","));
                    window.location.href = `/store-virasat-store?${params.toString()}`;
                  }}
                  className="px-5 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300"
                >
                  Shop Local from Your Destination
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setStartDate("");
                    setEndDate("");
                    setAdults(1);
                    setChildren(0);
                    setHotelClass("3");
                    setBudgetLevel("standard");
                    setInterests(["heritage"]);
                  }}
                  className="px-5 py-3 border border-white/20 rounded-xl hover:bg-white/10"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Tours & Guides */}
      <section className="border-t border-white/10 bg-black/70 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h3 className="font-serif text-4xl font-bold tracking-tight md:text-5xl">Personalized Tours & Guides</h3>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">Suggested by your destination and interests</p>
          </div>

          {(() => {
            const city = destination || origin;
            const activeTags = interests.length ? interests : ["heritage"];
            const filtered = tourGuides.filter((t) => (
              (!city || t.city.toLowerCase().includes(city.toLowerCase())) &&
              t.tags.some((tag) => activeTags.includes(tag))
            ));
            const list = filtered.length ? filtered : tourGuides.slice(0, 3);
            return (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {list.map((tour) => (
                  <div key={tour.id} className="group overflow-hidden border-2 border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-all">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img src={tour.image} alt={tour.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold">
                        {tour.durationHours} hrs · {tour.city}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white">{tour.title}</h4>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-sm text-gray-300">by {tour.provider}</span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {tour.tags.map((tg) => (
                          <span key={tg} className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 text-white">{tg}</span>
                        ))}
                      </div>
                      <div className="mt-6 flex items-center justify-between">
                        <div className="text-2xl font-bold text-fuchsia-400">₹{tour.pricePerPerson.toLocaleString()}</div>
                        <button
                          onClick={() => {
                            // Prefill planner with city and interest
                            if (!destination) setDestination(tour.city);
                            if (!interests.includes(tour.tags[0])) toggleInterest(tour.tags[0]);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className="px-5 py-2.5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold rounded-xl"
                        >
                          Add to Plan
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Travel Modes */}
      <section className="border-t border-white/10 bg-gradient-to-b from-black to-black/60 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h3 className="font-serif text-4xl font-bold tracking-tight md:text-6xl">Choose Your Travel Mode</h3>
            <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Select the perfect way to explore India's diverse terrain
            </p>
          </div>
          <TravelModesGrid />
        </div>
      </section>

      {/* Interactive Map */}
      <section className="border-t border-white/10 bg-black/60 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h3 className="font-serif text-4xl font-bold tracking-tight md:text-6xl">Explore Routes on Map</h3>
            <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Live map with markers and route between your selected cities
            </p>
          </div>
          <div className="relative overflow-hidden border-2 border-white/10 rounded-2xl">
            <div className="absolute bottom-4 left-4 rounded-lg bg-black/70 p-4 shadow-lg border border-white/10 backdrop-blur z-[10]">
              <div className="flex items-center gap-2 text-sm">
                <NavigationIcon className="h-4 w-4 text-fuchsia-400" />
                <span className="font-medium text-white">Interactive Map</span>
              </div>
              <p className="mt-2 text-xs text-gray-300">Markers update when you change cities</p>
            </div>
            <div className="w-full h-[400px]">
              <InteractiveMap origin={origin} destination={destination} travelMode={selectedMode} height={400} />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="border-t border-white/10 bg-gradient-to-b from-black to-black/60 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h3 className="font-serif text-4xl font-bold tracking-tight md:text-6xl">Popular Routes</h3>
            <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Discover the most traveled paths across India
            </p>
          </div>
          <PopularRoutesGrid />
        </div>
      </section>

      {/* Experiences */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h3 className="font-serif text-4xl font-bold tracking-tight md:text-6xl">Unique Experiences</h3>
            <p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Curated experiences to make your journey unforgettable
            </p>
          </div>
          <ExperienceCardsGrid />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/80 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div>
              <h4 className="font-serif text-xl font-bold">Incredible India</h4>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">Your gateway to exploring India</p>
            </div>
            <div>
              <h5 className="font-semibold text-base mb-4">Destinations</h5>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors hover:underline">North India</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">South India</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">East India</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">West India</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-base mb-4">Travel Info</h5>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Travel Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Visa Information</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Safety Guidelines</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Best Time to Visit</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-base mb-4">Support</h5>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-300">
            <p className="font-medium">© 2025 Incredible India. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PlanTripPage;
