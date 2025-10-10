
// This component displays a real image from a URL
const ImageDisplay = ({ imageUrl, altText }) => (
  <div className="w-full md:w-5/12 overflow-hidden rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-105">
    <img
      src={imageUrl}
      alt={altText}
      className="w-full h-72 object-cover object-center"
    />
  </div>
);


const CharminarPage = () => {
  return (
    <main className="bg-gray-900 font-sans text-gray-300 py-12 md:py-20">
      <article className="max-w-6xl mx-auto px-6">

        <header className="text-center mb-16 md:mb-24">
          <p className="text-lg text-amber-500 font-semibold mb-3 tracking-wide uppercase">INDIA'S HERITAGE</p>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-amber-300">
            Charminar <span className="text-lime-400">(The Four Minarets)</span>
          </h1>
        </header>

        {/* -- Section 1: Introduction (Text Left, Image Right) -- */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
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
        </section>

        {/* -- Section 2: History (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">A Monument of Gratitude</h2>
            <p className="text-xl leading-relaxed">
              Built in 1591 by Muhammad Quli Qutb Shah, the fifth ruler of the Qutb Shahi dynasty, the Charminar was constructed to commemorate the eradication of a deadly plague from the city. Legend has it that he prayed for the end of the plague at the very spot where the monument now stands.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://t4.ftcdn.net/jpg/10/00/93/43/360_F_1000934313_lXU2gQv7XYSu9xNjgfysJPPUYK7FoLNU.jpg"
            altText="A historical view of Charminar amidst the city"
          />
        </section>
        
        {/* -- Section 3: Architecture (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row items-start gap-10 md:gap-16 mb-16 md:mb-24">
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
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
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
        </section>

      </article>
    </main>
  );
};

export default CharminarPage;