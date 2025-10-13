import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";


const MagneticButton = ({ children, className = "", ...props }: any) => {
  return (
    <motion.button
      whileHover={{ scale: 1.045 }}
      whileTap={{ scale: 0.965 }}
      onMouseMove={(e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        target.style.setProperty("--mx", `${x}px`);
        target.style.setProperty("--my", `${y}px`);
      }}
      className={`relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(200px_circle_at_var(--mx)_var(--my),rgba(255,220,150,0.18),transparent_60%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Reusable divider (inline version to keep file self-contained)
// const SectionDivider = ({ delay = 0.1 }: { delay?: number }) => (
//   <motion.div
//     role="separator"
//     aria-hidden="true"
//     initial={{ width: 0, opacity: 0 }}
//     whileInView={{ width: "min(90%, 960px)", opacity: 1 }}
//     viewport={{ once: true, amount: 0.3 }}
//     transition={{ duration: 0.8, delay }}
//     className="
//       mt-12  h-[2px] rounded-full
//       bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-500
//       shadow-[0_0_10px_#f5c86d]
//     "
//   />
// );

const scrollFadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Monuments Section — amber glass theme like Auth */}
<motion.section
  id="monuments"
  className="
    relative min-h-screen flex flex-col items-center justify-center
    px-6 py-24
     bg-[#FFF9E6] text-[#4e342e]
    text-amber-100
    dark:bg-gradient-to-b dark:from-[#0b0b12] dark:via-[#14111d] dark:to-[#0f0907] dark:text-amber-100
  "
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={scrollFadeIn}
>
  {/* Ambient vignette similar to Auth */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_20%,rgba(255,204,128,0.12),rgba(0,0,0,0)_60%)]"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_60%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.55)_100%)]"
  />

  {/* Title with warm gradient like Auth */}
  <motion.h2
    className="
      text-4xl md:text-6xl font-serif font-bold text-center
      bg-gradient-to-r from-[#C98000] via-[#E07B00] to-[#C84900]
      text-transparent bg-clip-text tracking-wide
      [text-shadow:0_1px_0_rgba(0,0,0,0.25),0_2px_16px_rgba(224,123,0,0.35)]
    "
    whileHover={{ scale: 1.03 }}
  >
    Monuments of India
  </motion.h2>

  
  {/* Cards grid */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
    {[
      {
        name: "Taj Mahal",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
        desc:
          "The Taj Mahal, an iconic symbol of love, stands gracefully on the banks of the Yamuna River in Agra. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, this marble marvel showcases intricate carvings, symmetrical gardens, and a breathtaking dome. It is not only an architectural masterpiece but also a testament to India’s rich Mughal heritage.",
      },
      {
        name: "Qutub Minar",
        img: "https://imgs.search.brave.com/kPTxvWvUyY0dq1h91Vsjeed868R7skbCOP0oH-4-wGw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgw/MTA0NDE5L3Bob3Rv/L3F1dHViLW1pbmFy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1UZWtheWdVSHRX/SUVGOGFXa0V1dVUz/UUNpb0FvUjAxaWxG/aTNqeE04ODM4PQ",
        desc:
          "Standing tall in Delhi, the Qutub Minar is a towering example of Indo-Islamic architecture. Constructed in 1193, this five-story red sandstone minaret is adorned with intricate carvings and inscriptions from the Quran. A UNESCO World Heritage Site, it represents the advent of Islamic rule in India.",
      },
      {
        name: "Red Fort",
        img: "https://imgs.search.brave.com/1L2uJX-E4WOjnyUVRISAPnysyXmoYfZNriJHKocNcvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM2/OTk4NzUwNy9waG90/by9yZWQtZm9ydC1k/ZWxoaS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Zm8xdld2/T0NaOFJUWVBmVXB3/aWNrd1IyMFM0blhN/OVhfNFhTR1RCbDVL/cz0",
        desc:
          "Delhi’s Red Fort, or Lal Qila, served as the main residence of the Mughal emperors for nearly 200 years. Its massive red sandstone walls, ornate gates, and expansive courtyards reflect the grandeur of Mughal architecture. Every year, it hosts India’s Independence Day celebrations, making it historically and culturally significant.",
      },
      {
        name: "India Gate",
        img: "https://i.pinimg.com/originals/1e/2c/e8/1e2ce8efb339a000591a0d0114bf3c04.jpg",
        desc:
          "India Gate, located in New Delhi, is a war memorial built to honor the soldiers of the British Indian Army who died during World War I. Designed by Sir Edwin Lutyens, this towering arch stands amidst lush lawns and fountains, beautifully illuminated at night.",
      },
    ].map((monument, idx) => (
      <motion.div
        key={idx}
        className="
          relative rounded-2xl overflow-hidden group
          border border-amber-300/25 bg-white/5 backdrop-blur-md
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          transition-transform
        "
        whileHover={{ scale: 1.04 }}
      >
        <img
          src={monument.img}
          alt={monument.name}
          className="w-full h-72 md:h-80 lg:h-96 object-cover"
        />
        {/* Overlay with text similar to Auth tones */}
        <div className="
          absolute inset-0 bg-black/55
          text-amber-100 p-5 opacity-0
          group-hover:opacity-100 transition-opacity
          flex flex-col justify-end
        ">
          <h3 className="text-2xl font-semibold text-amber-300 mb-2">{monument.name}</h3>
          <p className="text-sm text-amber-100/90">{monument.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* CTA button styled like Auth primary */}
  <a href="/monuments" className="mt-14">
    <MagneticButton
              className="
                px-9 py-3 rounded-full font-semibold
                
                border border-yellow-400/50
                shadow-lg [box-shadow:0_10px_22px_rgba(107,78,26,0.14)]
                hover:opacity-95
                font-serif text-lg tracking-wide
                text-yellow-100 bg-gradient-to-r from-[#5a3411] to-[#8b4513] shadow-yellow-700/30
                transition
              "
            >
      Explore Monuments
            </MagneticButton>
  </a>
</motion.section>


      {/* Stories Section — matches Monuments theme, size, and hover behavior */}
<motion.section
  id="stories"
  className="
    relative min-h-screen flex flex-col items-center justify-center
    px-6 py-20
     bg-[#FFF9E6] text-[#4e342e]
    dark:bg-gradient-to-b from-[#0b0b12] via-[#14111d] to-[#0f0907]
    text-amber-100
  "
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={scrollFadeIn}
>
  {/* Ambient layers (same ambiance as Monuments/Auth) */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_20%,rgba(255,204,128,0.12),rgba(0,0,0,0)_60%)]"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_60%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.55)_100%)]"
  />

  {/* Heading identical to Monuments (font, gradient, effects) */}
  <motion.h2
    className="
      text-4xl md:text-6xl font-serif font-bold text-center
      bg-gradient-to-r from-[#C98000] via-[#E07B00] to-[#C84900]
      text-transparent bg-clip-text tracking-wide
      [text-shadow:0_1px_0_rgba(0,0,0,0.25),0_2px_16px_rgba(224,123,0,0.35)]
    "
    whileHover={{ scale: 1.03 }}
  >
    Ancient Stories
  </motion.h2>

  {/* Thin glowing divider (same as Monuments) */}
  {/* <div
    className="mt-6 h-[2px] w-56 rounded-full
               bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-500
               opacity-80 shadow-[0_0_10px_#f5c86d]"
    aria-hidden="true"
  /> */}

  {/* Same grid and card sizing as Monuments: h-72 md:h-80 lg:h-96 */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
    {[
      {
        title: "Ramayan — Tales of Ayodhya",
        img: "https://i.pinimg.com/564x/a0/bb/0a/a0bb0a4e98f4cdc1f1bf51288f89e835.jpg",
        desc:
          "The epic narrates the life of Rama, the seventh avatar of Vishnu. It follows his exile, Sita’s abduction, and the triumph of dharma.",
      },
      {
        title: "Mahabharata — The Great War",
        img: "https://miro.medium.com/v2/resize:fit:1400/1*KwnkWRH41cy_hQVVmVIDXw.png",
        desc:
          "The Mahabharata recounts the Kurukshetra War and moral dilemmas of the Pandavas and Kauravas, exploring duty and righteousness.",
      },
      {
        title: "Guru Granth Sahib — The Eternal Light",
        img: "https://www.pict.ai/images/secure/zRLRXm/4sqIc9ctpyLYndu_1725366381.png",
        desc:
          "The central scripture of Sikhism, compiled with hymns of Gurus and saints, guiding seekers towards devotion and oneness.",
      },
      {
        title: "Akbar — The Great Mughal",
        img: "https://files.algoreducation.com/production-ts/__S3__67e6e5e0-8d50-4702-abf4-86b2615b2256",
        desc:
          "A patron of arts and pluralism, Akbar’s reign marked a syncretic golden age blending cultures, ideas, and innovation.",
      },
    ].map((story, idx) => (
      <motion.div
        key={idx}
        className="
          relative rounded-2xl overflow-hidden group
          border border-amber-300/25 bg-white/5 backdrop-blur-md
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          transition-transform
        "
        whileHover={{ scale: 1.04 }}
      >
        {/* Image with same fixed heights as Monuments */}
        <img
          src={story.img}
          alt={story.title}
          className="w-full h-72 md:h-80 lg:h-96 object-cover"
        />

        {/* Hover-only overlay: very light blur + dim; hidden by default */}
<div
  className="
    absolute inset-0
    bg-black/35 backdrop-blur-[2px]
    opacity-0 group-hover:opacity-100
    transition-opacity duration-200
  "
/>

{/* Hover-only content over the same overlay, full card, bottom aligned */}
<div
  className="
    pointer-events-none absolute inset-0
    flex flex-col justify-end
    p-5 md:p-6
    text-amber-100
    opacity-0 group-hover:opacity-100
    transition-opacity duration-200
  "
>
  <h3 className="text-2xl font-semibold text-amber-300 mb-2">
    {story.title}
  </h3>
  <p className="text-sm md:text-base text-amber-100/90">
    {story.desc}
  </p>
</div>

      </motion.div>
    ))}
  </div>

  {/* CTA button unchanged */}
  <a href="/stories" className="mt-16">
    <MagneticButton
              className="
                px-9 py-3 rounded-full font-semibold
                
                border border-yellow-400/50
                shadow-lg [box-shadow:0_10px_22px_rgba(107,78,26,0.14)]
                hover:opacity-95
                font-serif text-lg tracking-wide
                text-yellow-100 bg-gradient-to-r from-[#5a3411] to-[#8b4513] shadow-yellow-700/30
                transition
              "
            >
      Explore Stories
            </MagneticButton>
  </a>

  
</motion.section>


      {/* States & UTs Section — matches Stories/Monuments theme, size, and hover behavior */}
<motion.section
  id="states"
  className="
    relative min-h-screen flex flex-col items-center justify-center
    px-6 py-24
    bg-[#FFF9E6] text-[#4e342e]
    dark:bg-gradient-to-b from-[#0b0b12] via-[#14111d] to-[#0f0907]
    text-amber-100
  "
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={scrollFadeIn}
>
  {/* Ambient layers for warm vignette */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_20%,rgba(255,204,128,0.12),rgba(0,0,0,0)_60%)]"
  />
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_60%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.55)_100%)]"
  />

  {/* Heading identical to Stories/Monuments (font, gradient, effects) */}
  <motion.h2
    className="
      text-4xl md:text-6xl font-serif font-bold text-center
      bg-gradient-to-r from-[#C98000] via-[#E07B00] to-[#C84900]
      text-transparent bg-clip-text tracking-wide
      [text-shadow:0_1px_0_rgba(0,0,0,0.25),0_2px_16px_rgba(224,123,0,0.35)]
    "
    whileHover={{ scale: 1.03 }}
  >
    States & Union Territories of India
  </motion.h2>

  {/* Optional thin glowing divider — uncomment if you want visual parity with Monuments */}
  {/*
  <div
    className="mt-6 h-[2px] w-56 rounded-full
               bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-500
               opacity-80 shadow-[0_0_10px_#f5c86d]"
    aria-hidden="true"
  />
  */}

  {/* Grid and card sizing same as Stories/Monuments */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
    {[
      {
        name: "Punjab",
        img: "https://static.toiimg.com/photo/108178837.cms",
        desc:
          "Land of five rivers, vibrant culture, Bhangra, fertile fields, and the iconic Golden Temple in Amritsar.",
      },
      {
        name: "Maharashtra",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4e/55/e6/chhatrapati-shivaji-terminus.jpg?w=1200&h=-1&s=1",
        desc:
          "Home to Mumbai, Ajanta–Ellora, and diverse landscapes from beaches to hill stations.",
      },
      {
        name: "Sikkim",
        img: "https://holidays.tripfactory.com/sikkim/wp-content/uploads/sites/18/2024/10/Things-to-do-in-Lachung.png",
        desc:
          "Himalayan monasteries, Kanchenjunga views, rich Buddhist culture, and pristine valleys.",
      },
      {
        name: "Tamil Nadu",
        img: "https://media.tacdn.com/media/attractions-splice-spp-720x480/15/3b/8c/de.jpg",
        desc:
          "Dravidian temples, Bharatanatyam, Carnatic music, and scenic Ooty to Kanyakumari trails.",
      },
      {
        name: "Ladakh",
        img: "https://wanderon-images.gumlet.io/blogs/new/2023/12/leh-ladakh.jpg",
        desc:
          "Land of high passes, monasteries, Pangong Lake, and stark Himalayan deserts.",
      },
      {
        name: "Delhi",
        img: "https://img.freepik.com/photos-gratuite/scene-batiments-ville-indienne_23-2151823080.jpg?w=740&q=80",
        desc:
          "Capital with Mughal heritage, colonial architecture, markets, and seat of government.",
      },
      {
        name: "Andaman & Nicobar",
        img: "https://indiadekha.com/wp-content/uploads/2025/03/DALL%C2%B7E-2025-03-25-19.06.52-A-scenic-view-of-Port-Blair-the-capital-of-Andaman-and-Nicobar-Islands.-The-image-features-a-beautiful-coastline-with-turquoise-waters-a-bustling-ha-1024x585.webp",
        desc:
          "Pristine beaches, coral reefs, Cellular Jail, and lush tropical islands.",
      },
      {
        name: "Lakshadweep",
        img: "https://etimg.etb2bimg.com/photo/109819916.cms",
        desc:
          "Lagoons, marine life, and water sports across jewel-like atolls in the Arabian Sea.",
      },
    ].map((place, idx) => (
      <motion.div
        key={idx}
        className="
          relative rounded-2xl overflow-hidden group
          border border-amber-300/25 bg-white/5 backdrop-blur-md
          shadow-[0_10px_40px_rgba(0,0,0,0.35)]
          transition-transform
        "
        whileHover={{ scale: 1.04 }}
      >
        <img
          src={place.img}
          alt={place.name}
          className="w-full h-72 md:h-80 lg:h-96 object-cover"
        />

        {/* Hover-only overlay: subtle, full-card */}
        <div
          className="
            absolute inset-0
            bg-black/35 backdrop-blur-[2px]
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
          "
        />

        {/* Hover-only content: full-card, bottom aligned */}
        <div
          className="
            pointer-events-none absolute inset-0
            flex flex-col justify-end
            p-6
            text-amber-100
            opacity-0 group-hover:opacity-100
            transition-opacity duration-200
          "
        >
          <h3 className="text-2xl font-semibold text-amber-300 mb-2">
            {place.name}
          </h3>
          <p className="text-sm text-amber-100/90">
            {place.desc}
          </p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* CTA (unchanged styling) */}
  <a href="/states" className="mt-16">
    <MagneticButton
              className="
                px-9 py-3 rounded-full font-semibold
                
                border border-yellow-400/50
                shadow-lg [box-shadow:0_10px_22px_rgba(107,78,26,0.14)]
                hover:opacity-95
                font-serif text-lg tracking-wide
                text-yellow-100 bg-gradient-to-r from-[#5a3411] to-[#8b4513] shadow-yellow-700/30
                transition
              "
            >
      Explore States & UTs
            </MagneticButton>
  </a>
</motion.section>

    </>
  );
};

export default LandingPage;
