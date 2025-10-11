
import Header from "../components/Header";

const StoreComingSoonPage = () => {
  return (
    <div className="relative min-h-screen bg-[#111] text-white flex flex-col items-center justify-center">
      <Header />

      {/* Coming Soon Image */}
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/003/582/701/small_2x/coming-soon-background-illustration-template-design-free-vector.jpg"
        alt="Coming Soon Store"
        className="w-full h-full mb-6 animate-pulse"
      />

    </div>
  );
};

export default StoreComingSoonPage;
