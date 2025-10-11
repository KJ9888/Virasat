import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Animation from "../components/Animation";

// Image Display Component with animation
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

const HawaMahalPage = () => {
  const navigate = useNavigate();
  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      {/* Back Button */}
      <motion.div
        className="absolute top-6 left-6 z-50"
        whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(255, 200, 0, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="relative text-amber-400 font-semibold px-4 py-2 rounded transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          &larr; Back to Monuments
        </button>
      </motion.div>

      {/* Animated Background */}
      <div className="fixed top-0 inset-0 -z-10">
        <Animation />
      </div>

      <main className="font-sans text-gray-300 pt-24 md:pt-28 py-12 md:py-20">
        <article className="max-w-6xl mx-auto px-6">

          {/* Page Title */}
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
            
            <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-amber-300">
              Hawa Mahal   <br /> <span className="text-pink-400">(Palace of Winds)</span>
            </h1>
          </motion.header>

          {/* Video Section */}
          <motion.section
            className="mb-16 md:mb-24 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full md:w-4/5 aspect-video rounded-xl overflow-hidden shadow-2xl">
              <video
                src="YOUR_HAWA_MAHAL_VIDEO_LINK.mp4"
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </motion.section>

          {/* Section 1: Introduction */}
          <motion.section
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Introduction</h2>
              <p className="text-xl leading-relaxed">
                Located in the heart of Jaipur, the "Pink City," Hawa Mahal is an extraordinary palace renowned for its intricate, honeycomb-like facade. Its name, meaning "Palace of Winds," perfectly describes its purpose: to allow the royal women to observe street festivities unseen from the outside through its 953 small windows.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://www.shutterstock.com/shutterstock/videos/1103284395/thumb/1.jpg?ip=x480"
              altText="The iconic pink facade of Hawa Mahal"
            />
          </motion.section>

          {/* Section 2: History */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">A Royal Design</h2>
              <p className="text-xl leading-relaxed">
                Constructed in 1799 by Maharaja Sawai Pratap Singh, the grandson of Jaipur's founder, Hawa Mahal was designed by Lal Chand Ustad. It was conceived as an extension of the City Palace's zenana, or women's chambers. Its unique design allowed royal ladies to adhere to the strict 'purdah' system while still witnessing everyday life.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://t4.ftcdn.net/jpg/10/00/93/43/360_F_1000934313_lXU2gQv7XYSu9xNjgfysJPPUYK7FoLNU.jpg"
              altText="A view of Hawa Mahal from the bustling streets of Jaipur"
            />
          </motion.section>

          {/* Section 3: Architecture */}
          <motion.section
            className="flex flex-col md:flex-row items-start gap-10 md:gap-16 mb-16 md:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-left">
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Architectural Marvel</h2>
              <p className="text-xl leading-relaxed">
                The five-story pyramidal structure is a magnificent blend of Rajput and Mughal architecture. Built from red and pink sandstone, its most famous feature is the facade adorned with 953 intricately latticed windows, known as 'jharokhas'. These windows were designed to circulate cool breezes, making it a perfect summer palace.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqM9T6IQDnt0JqTJ7wydhHss3upVbJ4sk0HxJAb5nfkgDeE384BA_-tK7qcbqWfRjdEU&usqp=CAU"
              altText="A close-up of the intricate jharokhas (windows) of Hawa Mahal"
            />
          </motion.section>

          {/* Section 4: Today */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariant}
          >
            <div className="md:w-7/12 text-right">
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">The Palace Today</h2>
              <p className="text-xl leading-relaxed">
                Today, Hawa Mahal stands as Jaipur's most iconic landmark. Visitors can explore the narrow corridors and chambers behind the famous facade, offering stunning views of the City Palace and the Jantar Mantar. It remains a must-visit destination, capturing the essence of Rajputana's royal past.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tQfhMPiV09RvyAqnJtYIwLNGVv_7O1vAbg&s"
              altText="Hawa Mahal illuminated beautifully in the evening light"
            />
          </motion.section>

        </article>
      </main>
    </>
  );
};

export default HawaMahalPage;
