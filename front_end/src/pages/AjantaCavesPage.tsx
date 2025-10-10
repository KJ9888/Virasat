import React from 'react';

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


const AjantaCavesPage = () => {
  return (
    <main className="bg-gray-900 font-sans text-gray-300 py-12 md:py-20">
      <article className="max-w-6xl mx-auto px-6">

        <header className="text-center mb-16 md:mb-24">
          <p className="text-lg text-amber-500 font-semibold mb-3 tracking-wide uppercase">INDIA'S HERITAGE</p>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-amber-300">
            Ajanta Caves <span className="text-orange-400">(Rock-Cut Masterpieces)</span>
          </h1>
        </header>

        {/* -- Section 1: Introduction (Text Left, Image Right) -- */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Introduction</h2>
            <p className="text-xl leading-relaxed">
              The Ajanta Caves are a series of 30 rock-cut Buddhist cave monuments located in the Aurangabad district of Maharashtra. Dating from the 2nd century BCE to about 480 CE, these caves are a UNESCO World Heritage Site and are considered masterpieces of Buddhist religious art that have had a significant influence on art in India.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://s7ap1.scene7.com/is/image/incredibleindia/ajanta-caves-chhatrapati-sambhaji-nagar-maharashtra-attr-hero-1?qlt=82&ts=1727010611256"
            altText="The horseshoe-shaped cliff face of the Ajanta Caves"
          />
        </section>

        {/* -- Section 2: History (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">Rediscovered History</h2>
            <p className="text-xl leading-relaxed">
              The caves were built in two phases, the first during the Satavahana dynasty and the second during the Vakataka dynasty. After lying hidden in the dense jungle for centuries, they were accidentally rediscovered in 1819 by a British colonial officer named John Smith during a tiger hunt. His discovery brought this ancient artistic treasure to the world's attention.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://s7ap1.scene7.com/is/image/incredibleindia/ajanta-caves-chhatrapati-sambhaji-nagar-maharashtra-attr-hero-2?qlt=82&ts=1727010576169"
            altText="A view of the river and valley in front of the Ajanta Caves"
          />
        </section>
        
        {/* -- Section 3: Art and Murals (Image Left, Text Right) -- */}
        <section className="flex flex-col md:flex-row items-start gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600">Art and Murals</h2>
            <p className="text-xl leading-relaxed">
              Ajanta is most famous for its magnificent murals and frescoes, which are the finest surviving examples of ancient Indian painting. These vibrant paintings depict the Jataka tales, which are stories of the Buddha's previous lives. The caves also feature stunning rock-cut sculptures and architectural details within their prayer halls (chaityas) and monasteries (viharas).
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://media.assettype.com/outlooktraveller%2F2025-08-06%2F7sa66ppu%2Fshutterstock2412374961-min.jpg?w=480&auto=format%2Ccompress&fit=max"
            altText="A vibrant and detailed mural painting from inside the Ajanta Caves"
          />
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-amber-400 mb-4 pb-2 border-b-2 border-amber-600 inline-block">The Caves Today</h2>
            <p className="text-xl leading-relaxed">
              Today, the Ajanta Caves are a major tourist destination and a significant pilgrimage site for Buddhists. Preserving these ancient paintings from decay is an ongoing effort. A visit to the caves offers a profound glimpse into the artistic and religious life of ancient India, a journey back in time that leaves a lasting impression.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://travel-blog.happyeasygo.com/wp-content/uploads/2020/06/Ajanta-Caves-Monument.jpg"
            altText="The interior of a prayer hall in the Ajanta Caves with a sculpted Buddha"
          />
        </section>

      </article>
    </main>
  );
};

export default AjantaCavesPage;