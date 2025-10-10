
import { motion } from "framer-motion";
import Animation from "../components/Animation";
import Header from "../components/Header";

// Image Display Component
const ImageDisplay = ({ imageUrl, altText }) => (
  <motion.div
    className="w-full md:w-5/12 overflow-hidden rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-105"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <img
      src={imageUrl}
      alt={altText}
      className="w-full h-72 md:h-80 lg:h-96 object-cover object-center"
    />
  </motion.div>
);

const TajMahalPage = () => {
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
    <Header />
    <div className="fixed top-0 fixed inset-0 -z-10 ">
      <Animation/>
    </div>
    
    <main className=" font-sans text-gray-300 py-12 md:py-20">
      <article className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.header
          className="text-center mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
        >
          
          <h1 className="font-serif m-10 text-5xl md:text-7xl font-extrabold text-amber-300">
            The Taj Mahal <br /><span className="text-blue-300">(Crown of Palaces)</span>
          </h1>
        </motion.header>

        {/* -- Cinematic Video Section -- */}
        <motion.section
          className="mb-16 md:mb-24 w-full flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full md:w-4/5 aspect-video rounded-xl overflow-hidden shadow-2xl">
            <video
              src="../../assets/tajmahal.mp4"
              controls
              autoPlay
              muted
              className="w-full h-full object-cover"
            />
          </div>
        </motion.section>

        {/* -- Section 1: Introduction (Text Left, Image Right) -- */}
        <motion.section
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={[sectionVariant]}
        >
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">
              Introduction
            </h2>
            <p className="text-xl leading-relaxed">
              An immense mausoleum of white marble, the Taj Mahal is undoubtedly the most beautiful monument built by the Mughals. Built in Agra between 1631 and 1648 by order of Emperor Shah Jahan in memory of his favourite wife, Mumtaz Mahal, it is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://www.thoughtco.com/thmb/mvzDYqXzP4T_D7JfMTsWm5GgDZA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg"
            altText="A beautiful front view of the Taj Mahal"
          />
        </motion.section>

        {/* -- Section 2: History (Image Left, Text Right) -- */}
        <motion.section
          className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">
              A Timeless Love Story
            </h2>
            <p className="text-xl leading-relaxed">
              The Taj Mahal stands as a testament to eternal love. It was commissioned after Mumtaz Mahal, Shah Jahan's beloved wife, died during childbirth. Deeply heartbroken, the Emperor embarked on constructing a monument that would be an unparalleled symbol of his love. Its construction involved twenty thousand artisans, and it took over 22 years to complete.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://www.tajwithguide.com/blog/wp-content/uploads/mumtaj-mahal.webp"
            altText="A close-up of the marble and intricate carvings of the Taj Mahal"
          />
        </motion.section>

        {/* -- Section 3: Architecture (Image Left, Text Right) -- */}
        <motion.section
          className="flex flex-col md:flex-row items-start gap-10 md:gap-16 mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">
              Architectural Masterpiece
            </h2>
            <p className="text-xl leading-relaxed">
              The architecture of the Taj Mahal is a harmonious blend of Persian, Islamic, and Indian styles. The main structure is a massive white marble dome, flanked by four minarets. The intricate marble inlay work, featuring precious and semi-precious stones, tells tales of Mughal artistry and craftsmanship.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://lionsinthepiazza.com/wp-content/uploads/2024/03/fatehpur-interior-766x1024.jpg"
            altText="The intricate inlay work on the marble walls of the Taj Mahal"
          />
        </motion.section>

        {/* -- Section 4: Today (Image Right, Text Left) -- */}
        <motion.section
          className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">
              The Taj Today
            </h2>
            <p className="text-xl leading-relaxed">
              Recognized as a UNESCO World Heritage Site, the Taj Mahal attracts millions of visitors annually. It remains a powerful symbol of India and an icon of architectural beauty. Whether bathed in the glow of sunrise or silhouetted against the moonlight, its beauty continues to captivate hearts worldwide.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://i0.wp.com/thewanderingcore.com/wp-content/uploads/2018/01/taj-mahal-agra-india.png?resize=750%2C565&ssl=1"
            altText="Taj Mahal reflecting in the water at sunrise"
          />
        </motion.section>
      </article>
    </main>
    </>
  );
};

export default TajMahalPage;
