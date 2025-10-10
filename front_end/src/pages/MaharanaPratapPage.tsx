// src/pages/MaharanaPratapPage.tsx

import React from 'react';

// Reusable component for displaying an image
interface ImageDisplayProps {
  imageUrl: string; 
  altText: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, altText }) => (
  <div className="w-full md:w-5/12">
    <img
      src={imageUrl}
      alt={altText}
      className="w-full h-72 object-cover rounded-lg shadow-md"
    />
  </div>
);

const MaharanaPratapPage: React.FC = () => {
  return (
    <main className="bg-white font-sans text-gray-800 py-12 md:py-20">
      <article className="max-w-6xl mx-auto px-6">

        <header className="text-center mb-16 md:mb-24">
          <p className="text-lg text-red-700 font-semibold mb-2">THE LION OF MEWAR</p>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-gray-900">
            Maharana Pratap: <span className="text-red-800">The King Who Never Bowed</span>
          </h1>
        </header>

        {/* -- Section 1: Defiance Against Akbar -- */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200">The Unyielding Spirit of Mewar</h2>
            <p className="text-lg leading-relaxed">
              In the 16th century, while the Mughal Emperor Akbar expanded his dominion, Maharana Pratap of Mewar stood alone. He fiercely guarded Mewar's independence, refusing Akbar's offers and choosing a life of relentless struggle over vassalage. This unwavering resolve set the stage for an epic confrontation.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/5/5e/Maharana_Pratap.jpg"
            altText="A majestic portrait of Maharana Pratap, symbolizing his defiant spirit"
          />
        </section>

        {/* -- Section 2: The Battle of Haldighati -- */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200 inline-block">Haldighati: The Famed Pass</h2>
            <p className="text-lg leading-relaxed">
              In 1576, Akbar's formidable army, led by Man Singh, converged on Pratap's forces at the narrow mountain pass of Haldighati. Though vastly outnumbered, Pratap's Mewari army fought with unmatched courage. Maharana Pratap, astride his legendary horse Chetak, carved a path through enemy ranks, directly engaging Man Singh.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/2/26/Battle_of_Haldighati_illustration.jpg"
            altText="An intense artistic depiction of the Battle of Haldighati, showing Maharana Pratap on Chetak"
          />
        </section>
        
        {/* -- Section 3: Chetak's Sacrifice -- */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200">Chetak's Heroic Leap</h2>
            <p className="text-lg leading-relaxed">
              As the battle turned, Maharana Pratap was wounded and his army on the brink. His loyal steed, Chetak, severely injured, galloped away, pursued by Mughals. Facing a wide ravine, Chetak, in a final act of devotion, made an impossible leap to carry his master to safety before succumbing to his wounds. The loss deeply grieved the Maharana.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/3/34/Chetak_Horse_Leap.jpg"
            altText="An artistic representation of Chetak making a heroic leap across a chasm"
          />
        </section>

        {/* -- Section 4: The Unconquered Spirit -- */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200 inline-block">Guerrilla Warfare and Resolve</h2>
            <p className="text-lg leading-relaxed">
              Though Haldighati was a tactical defeat, Maharana Pratap never surrendered the war for freedom. He retreated to the rugged Aravalli hills, waging a relentless guerrilla war against the Mughals. He lived a life of hardship, vowing to forgo comfort until Chittor was reclaimed, inspiring his people with his unwavering resolve.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a0/Aravalli_Hills.jpg"
            altText="The rugged and majestic Aravalli hills, symbolizing Maharana Pratap's hideout"
          />
        </section>

        {/* -- Section 5: Legacy -- */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200">Immortal Symbol of Courage</h2>
            <p className="text-lg leading-relaxed">
              Maharana Pratap's enduring struggle and immense personal sacrifices have cemented his place in history as an immortal symbol of courage, patriotism, and the unyielding fight for freedom against all odds. His legacy continues to inspire generations.
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6f/Akbar_Court_Art.jpg"
            altText="A depiction of the grand Mughal court, contrasting with Pratap's defiance"
          />
        </section>

      </article>
    </main>
  );
};

export default MaharanaPratapPage;
