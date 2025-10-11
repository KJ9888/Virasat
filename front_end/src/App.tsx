import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MonumentsPage from "./pages/MonumentsPage";
import Stories from "./pages/Stories";
import DancePage from "./pages/DancePage";
import StatesPage from "./pages/StatesPage";
import ScrollToTop from "./components/ScrollToTop";
import AuthPage from "./pages/AuthPage";

// Monument/Story pages
import RedFortPageDynamic from "./pages/RedFortPageDynamic";
import QutubMinar from "./pages/QutubMinar";
import TajMahalPage from "./pages/TajMahalPage";
import HawaMahalPage from "./pages/HawaMahalPage";
import IndiaGatePage from "./pages/IndiaGatePage";
import GatewayOfIndiaPage from "./pages/GatewayOfIndiaPage";
import AjantaCavesPage from "./pages/AjantaCavesPage";
import CharminarPage from "./pages/CharminarPage";
import KonarkSunTemplePage from "./pages/KonarkSunTemplePage";
import SambhajiMaharajPage from "./pages/SambhajiMaharajPage";
import AshokaPage from "./pages/AshokaPage";
import KhalsaBirthPage from "./pages/KhalsaBirthPage";
import MaharanaPratapPage from "./pages/MaharanaPratapPage";
import PunjabPage from "./pages/PunjabPage";
import DelhiPage from "./pages/DelhiPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import PlanTripPage from "./pages/PlanTripPage";
import Finalall from "./pages/Finalall";
import VirasatStore from "./pages/VirasatStore";
import MahabharataPage from "./pages/MahabharataPage";
import RamayanaPage from "./pages/RamayanaPage";
import GuruGranthSahibPage from "./pages/GuruGranthSahibPage";
import AkbarTheGreatPage from "./pages/AkbarTheGreatPage";
import Blog from "./pages/Blog";


const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/plan-trip" element={<PlanTripPage />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/dance" element={<DancePage />} />
        <Route path="/states" element={<StatesPage />} />
        <Route path="/coming-soon" element={<ComingSoonPage />} />
        <Route path="/store-virasat-store" element={<VirasatStore />} />
        <Route path="/stories/mahabharata" element={<MahabharataPage />} />
        <Route path="/finalall" element={<Finalall />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/stories/ramayana" element={<RamayanaPage />} />
        <Route path="/stories/guru-granth-sahib" element={<GuruGranthSahibPage />} />
        <Route path="/stories/akbar-the-great" element={<AkbarTheGreatPage />} />
        <Route path="/auth" element={<AuthPage />} />

      </Routes>
    </BrowserRouter>
    </>
      
  
  );
};

export default App;
