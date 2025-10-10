import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MonumentsPage from "./pages/MonumentsPage";
import Stories from "./pages/Stories.js";
import DancePage from "./pages/DancePage";
import StatesPage from "./pages/StatesPage";

// Monument/Story pages
import RedFortPageDynamic from "./pages/RedFortPageDynamic.js";
import QutubMinar from "./pages/QutubMinar.jsx";
import TajMahalPage from "./pages/TajMahalPage";
import HawaMahalPage from "./pages/HawaMahalPage.js";
import IndiaGatePage from "./pages/IndiaGatePage.js";
import GatewayOfIndiaPage from "./pages/GatewayOfIndiaPage.js";
import AjantaCavesPage from "./pages/AjantaCavesPage.js";
import CharminarPage from "./pages/CharminarPage.js";
import KonarkSunTemplePage from "./pages/KonarkSunTemplePage.js";
import SambhajiMaharajPage from "./pages/SambhajiMaharajPage.js";
import AshokaPage from "./pages/AshokaPage.js";
import KhalsaBirthPage from "./pages/KhalsaBirthPage.js";
import MaharanaPratapPage from "./pages/MaharanaPratapPage.js";
import PunjabPage from "./pages/PunjabPage";
import DelhiPage from "./pages/DelhiPage";
import ComingSoonPage from "./pages/ComingSoonPage.js";
import PlanTripPage from "./pages/PlanTripPage.js";
import Finalall from "./pages/Finalall.js";
import VirasatStore from "./pages/VirasatStore.js";
import MahabharataPage from "./pages/MahabharataPage"; // Import the MahabharataPage component
import Blog from "./pages/Blog"; // Import the Blog component



const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/monuments" element={<MonumentsPage />} />
      <Route path="/monuments/red-fort" element={<RedFortPageDynamic />} />
      <Route path="/monuments/qutub-minar" element={<QutubMinar />} />
      <Route path="/monuments/taj-mahal" element={<TajMahalPage />} />
      <Route path="/monuments/hawa-mahal" element={<HawaMahalPage />} />
      <Route path="/monuments/india-gate" element={<IndiaGatePage />} />
      <Route path="/monuments/gateway-of-india" element={<GatewayOfIndiaPage />} />
      <Route path="/monuments/charminar" element={<CharminarPage />} />
      <Route path="/monuments/ajanta-caves" element={<AjantaCavesPage />} />
      <Route path="/monuments/konark-sun-temple" element={<KonarkSunTemplePage />} />
      <Route path="/stories/ashoka-the-great" element={<AshokaPage />} />
      <Route path="/stories/sambhaji-maharaj" element={<SambhajiMaharajPage />} />
      <Route path="/stories/khalsa-birth" element={<KhalsaBirthPage />} />
      <Route path="/stories/maharana-pratap" element={<MaharanaPratapPage />} />
      <Route path="/states/punjab" element={<PunjabPage />} />
      <Route path="/union-territories/delhi" element={<DelhiPage />} />
      <Route path="/plan-trip" element={<PlanTripPage />} /> {/* ✅ PlanTripPage route */}
      <Route path="/stories" element={<Stories />} />
      <Route path="/dance" element={<DancePage />} />
      <Route path="/states" element={<StatesPage />} />
      <Route path="/coming-soon" element={<ComingSoonPage />} />
      <Route path="/store-virasat-store" element={<VirasatStore />} />
      <Route path="/stories/mahabharata" element={<MahabharataPage />} /> {/* Mahabharata route */}
      <Route path="/finalall" element={<Finalall />} />
      <Route path="/blog" element={<Blog />} /> {/* Blog route */}

      
    </Routes>
  );
};

export default App;
