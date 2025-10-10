import React from 'react';

// Define the types for the props
interface ImageDisplayProps {
  imageUrl: string; 
  altText: string;
}

// Reusable component for displaying an image
const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, altText }) => (
  <div className="w-full md:w-5/12">
    <img
      src={imageUrl}
      alt={altText}
      className="w-full h-72 object-cover rounded-lg shadow-md"
    />
  </div>
);

// Main component for the page
const KhalsaBirthPage: React.FC = () => {
  return (
    <main className="bg-white font-sans text-gray-800 py-12 md:py-20">
      <article className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-16 md:mb-24">
          <p className="text-lg text-red-700 font-semibold mb-2">VAISAKHI, 1699</p>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold text-gray-900">
            The Birth of the Khalsa: <span className="text-red-800">A Test of Courage and Faith</span>
          </h1>
        </header>

        {/* Section 1 */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200">The Guru's Demand</h2>
            <p className="text-lg leading-relaxed">
              In 1699, at the Baisakhi gathering in Anandpur Sahib, Guru Gobind Singh knew his followers needed to be transformed...
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://your-image-link.com/guru-gobind-singh-sword.jpg"
            altText="An artistic depiction of Guru Gobind Singh with his sword raised"
          />
        </section>

        {/* Section 2 */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200 inline-block">A Test of Faith</h2>
            <p className="text-lg leading-relaxed">
              A deathly silence fell. After the Guru's repeated demand, a humble shopkeeper named Daya Ram stood...
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://your-image-link.com/sikh-volunteer.jpg"
            altText="A symbolic image of a Sikh volunteer showing unwavering faith"
          />
        </section>
        
        {/* Section 3 */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200">Four More Souls</h2>
            <p className="text-lg leading-relaxed">
              Though the crowd was paralyzed with terror, four more brave souls...
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://your-image-link.com/panj-pyare-diverse.jpg"
            altText="An artistic representation of the five men from different castes stepping forward"
          />
        </section>

        {/* Section 4 */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200 inline-block">The Five Beloved Ones</h2>
            <p className="text-lg leading-relaxed">
              After the fifth man vanished, the Guru emerged with all five men, alive, unharmed...
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://your-image-link.com/panj-pyare-reborn.jpg"
            altText="The Panj Pyare (Five Beloved Ones) standing together, reborn and dressed majestically"
          />
        </section>

        {/* Section 5 */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">
          <div className="md:w-7/12 text-left">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200">The Nectar of Immortality</h2>
            <p className="text-lg leading-relaxed">
              The Guru then initiated them into a new order. Mixing sugar into water with his double-edged sword...
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://your-image-link.com/preparing-amrit.jpg"
            altText="A depiction of the preparation of Amrit with a double-edged sword (Khanda)"
          />
        </section>

        {/* Section 6 */}
        <section className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          <div className="md:w-7/12 text-right">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-red-200 inline-block">A Revolutionary Act</h2>
            <p className="text-lg leading-relaxed">
              In a revolutionary act that shattered all hierarchy, the Guru then knelt before the Panj Pyare...
            </p>
          </div>
          <ImageDisplay
            imageUrl="https://your-image-link.com/guru-as-disciple.jpg"
            altText="An image symbolizing the profound equality of the Khalsa"
          />
        </section>
      </article>
    </main>
  );
};
export default KhalsaBirthPage;