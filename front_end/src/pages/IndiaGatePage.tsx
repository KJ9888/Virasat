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

const IndiaGatePage = () => {
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
              India Gate <br /><span className="text-cyan-400">(All India War Memorial)</span>
            </h1>
          </motion.header>

          {/* Cinematic Video Section */}
<motion.section
  className="mb-16 md:mb-24 w-full flex justify-center"
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <div className="w-full md:w-4/5 aspect-video rounded-xl overflow-hidden shadow-2xl">
    <video
      src="YOUR_VIDEO_LINK_HERE.mp4"
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
                Located at the heart of New Delhi, India Gate is a war memorial dedicated to the 84,000 soldiers of the British Indian Army who died in the First World War. Standing at the eastern end of the Kartavya Path (formerly Rajpath), it is one of the most iconic monuments of the city and a symbol of national pride.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://upload.wikimedia.org/wikipedia/commons/9/99/India_Gate_on_the_evening_of_77th_Independence_day.jpg"
              altText="A wide shot of India Gate on a clear day"
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
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">A Tribute to the Fallen</h2>
              <p className="text-xl leading-relaxed">
                Designed by Sir Edwin Lutyens, the foundation stone was laid in 1921 and the structure was inaugurated in 1931. For many years, it housed the Amar Jawan Jyoti (the flame of the immortal soldier), an eternal flame that burned in memory of soldiers who died in the Indo-Pakistani War of 1971, before it was merged with the flame at the National War Memorial in 2022.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/m_activities_delhi_india_gate_1_l_442_663.jpg"
              altText="A respectful view of the eternal flame at India Gate"
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
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Design and Inscriptions</h2>
              <p className="text-xl leading-relaxed">
                Often compared to the Arc de Triomphe in Paris, this 42-meter-tall arch is built of sandstone. The walls of the arch are inscribed with the names of over 13,000 Indian soldiers who are commemorated here. The simplicity and grandeur of its design make it a powerful and moving memorial.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://d34vm3j4h7f97z.cloudfront.net/optimized/3X/b/0/b026865ef62e66b5ad63a97add42b4f5ec98e263_2_577x500.jpeg"
              altText="Close-up of the inscribed names on the walls of India Gate"
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
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">A National Hub</h2>
              <p className="text-xl leading-relaxed">
                Today, India Gate is a popular public space for locals and tourists. The surrounding lush green lawns are a favorite spot for evening picnics and leisure activities. The monument serves as the backdrop for the annual Republic Day parade, symbolizing the strength and unity of the nation.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://thumbs.dreamstime.com/b/india-gate-new-delhi-india-historical-memorial-89370507.jpg"
              altText="India Gate beautifully illuminated at night"
            />
          </motion.section>

        </article>
      </main>
    </>
  );
};

export default IndiaGatePage;
