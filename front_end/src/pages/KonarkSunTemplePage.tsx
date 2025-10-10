
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


const KonarkSunTemplePage = () => {
  return (
    <main className="bg-gray-900 font-sans text-gray-300 py-12 md:py-20">
      <article className="max-w-6xl mx-auto px-6">

        <header className="text-center mb-16 md:mb-24">
          <p className="text-lg text-amber-500 font-semibold mb-3 tracking-wide uppercase">INDIA'S HERITAGE</p>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-amber-300">
            Konark Sun Temple <span className="text-orange-500">(The Chariot of the Sun God)</span>
          </h1>
        </header>

        {/* -- Section 1: Introduction (Text Left, Image Right) -- */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Introduction</h2>
            <p className="text-xl leading-relaxed">
              Located on the coastline of Odisha, the Konark Sun Temple is a monumental representation of the Sun God Surya's chariot. Its 24 wheels are decorated with symbolic designs and it is led by a team of seven horses. A UNESCO World Heritage site, it is a classic example of Kalinga architecture and one of India's most famous temples.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://t4.ftcdn.net/jpg/05/45/40/15/360_F_545401584_r4Fs1INFeiCzvz3Mi4Tk7cCqQNZp1dQn.jpg"
            altText="The grand stone chariot structure of the Konark Sun Temple"
          />
        </section>

        {/* -- Section 2: History (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">A 13th-Century Marvel</h2>
            <p className="text-xl leading-relaxed">
              Built in the 13th century CE by King Narasimhadeva I of the Eastern Ganga dynasty, the temple was an architectural marvel of its time. The name 'Konark' is derived from the Sanskrit words 'Kona' (corner) and 'Arka' (sun). Much of the temple complex is now in ruins, but what remains is a testament to the incredible artistic and engineering skills of its creators.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.pexels.com/photos/1721747/pexels-photo-1721747.jpeg?cs=srgb&dl=pexels-bharatanirudh-1721747.jpg&fm=jpg"
            altText="The ruins and remaining structures of the Konark temple complex"
          />
        </section>
        
        {/* -- Section 3: Architecture (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row items-start gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">The Stone Chariot</h2>
            <p className="text-xl leading-relaxed">
              The temple's most striking feature is its design as a colossal chariot. It features twelve pairs of exquisitely carved stone wheels, three meters in diameter, which act as sundials. The temple is drawn by seven mighty horses. The walls are adorned with intricate carvings, including depictions of deities, musicians, and erotic sculptures known as mithunas.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://media.istockphoto.com/id/96668487/photo/ancient-hindu-sun-temple-at-konark.jpg?s=612x612&w=0&k=20&c=tfjyAU_J1jmhxXTIu31E-6WcH3vcedUOhN-a2Z-YtCY="
            altText="A close-up of one of the intricately carved stone wheels of the Konark Sun Temple"
          />
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">The Temple Today</h2>
            <p className="text-xl leading-relaxed">
              Even in its ruined state, the Konark Sun Temple continues to draw historians, art lovers, and tourists from all over the world. It is a site of immense cultural significance, hosting the annual Konark Dance Festival, which celebrates classical Indian dance forms. The temple is a stunning sight, especially during sunrise and sunset.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/12/16180328/Sun-Temple.jpg?tr=w-1200,q-60"
            altText="The Konark Sun Temple silhouetted against a beautiful sunset"
          />
        </section>

      </article>
    </main>
  );
};

export default KonarkSunTemplePage;