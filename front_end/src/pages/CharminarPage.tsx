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

const CharminarPage = () => {
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
              Charminar <br /> <span className="text-lime-400">(The Four Minarets)</span>
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
                An iconic symbol of Hyderabad, the Charminar is a magnificent monument and mosque. Its name, which translates to "Four Minarets," refers to the four ornate minarets that grace its structure. It stands at the heart of the city, an architectural gem that has captivated visitors for centuries.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              altText="The grand Charminar monument in Hyderabad"
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
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">A Monument of Gratitude</h2>
              <p className="text-xl leading-relaxed">
                Built in 1591 by Muhammad Quli Qutb Shah, the fifth ruler of the Qutb Shahi dynasty, the Charminar was constructed to commemorate the eradication of a deadly plague from the city. Legend has it that he prayed for the end of the plague at the very spot where the monument now stands.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4Iync03SQ7JxWnF2ECcE8me0IFU_VHXylQ3xHKMziUxye6_wTiAZaJFam5VITzL8yzYVe3fTqx1_y6ybGbsCZsafXcqrAJ3ksJoVC5blZvaIxt0X5bIHTVIreS7Y2S3o10xe8xb0yDrkq/s1600/The_fountain.jpg"
              altText="A historical view of Charminar amidst the city"
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
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Indo-Islamic Design</h2>
              <p className="text-xl leading-relaxed">
                The Charminar is a brilliant example of Indo-Islamic architecture with Persian influences. The square structure has four grand arches that face four cardinal directions. At each corner stands an exquisitely shaped minaret, 56 meters high, with a double balcony. It is constructed from granite and lime mortar.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://media.istockphoto.com/id/2168524178/photo/group-of-people-in-front-of-building.jpg?s=612x612&w=0&k=20&c=zhIMeFy0MdJHZ17bhv3LqvcdRsJ1w_uIQ3i1Nv5s82c="
              altText="A close-up showing the intricate details of a minaret"
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
              <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">The Heart of Hyderabad</h2>
              <p className="text-xl leading-relaxed">
                Today, the Charminar is synonymous with the culture of Hyderabad. It is surrounded by bustling markets like the Laad Bazaar, famous for its bangles. The upper floor contains a mosque, and the entire structure is beautifully illuminated at night, making it a spectacular sight.
              </p>
            </div>
            <ImageDisplay
              imageUrl="https://images.pexels.com/photos/32608130/pexels-photo-32608130.jpeg?cs=srgb&dl=pexels-surya-anand-2149946799-32608130.jpg&fm=jpg"
              altText="Charminar illuminated at night with city lights"
            />
          </motion.section>

        </article>
      </main>
    </>
  );
};

export default CharminarPage;
