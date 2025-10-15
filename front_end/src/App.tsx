import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

// Critical routes - load immediately
const LandingPage = lazy(() => import("./pages/LandingPage"));
const MonumentsPage = lazy(() => import("./pages/MonumentsPage"));
const Stories = lazy(() => import("./pages/Stories"));

// Monument routes - grouped with prefetch hints
const monumentImports = {
  redFort: () => import("./pages/RedFortPageDynamic"),
  qutub: () => import("./pages/QutubMinar"),
  taj: () => import("./pages/TajMahalPage"),
  hawa: () => import("./pages/HawaMahalPage"),
  indiaGate: () => import("./pages/IndiaGatePage"),
  gateway: () => import("./pages/GatewayOfIndiaPage"),
  ajanta: () => import("./pages/AjantaCavesPage"),
  charminar: () => import("./pages/CharminarPage"),
  konark: () => import("./pages/KonarkSunTemplePage"),
};

// Story routes - grouped
const storyImports = {
  sambhaji: () => import("./pages/SambhajiMaharajPage"),
  ashoka: () => import("./pages/AshokaPage"),
  khalsa: () => import("./pages/KhalsaBirthPage"),
  pratap: () => import("./pages/MaharanaPratapPage"),
  mahabharata: () => import("./pages/MahabharataPage"),
  ramayana: () => import("./pages/RamayanaPage"),
  guruGranth: () => import("./pages/GuruGranthSahibPage"),
  akbar: () => import("./pages/AkbarTheGreatPage"),
};

// Taj detailed pages - grouped
const tajImports = {
  intro: () => import("./pages/TajIntroduction"),
  history: () => import("./pages/TajHistory"),
  architecture: () => import("./pages/TajArchitecture"),
  visit: () => import("./pages/TajVisit"),
  virtualTour: () => import("./pages/TajVirtualTour"),
};

// Other routes
const otherImports = {
  dance: () => import("./pages/DancePage"),
  states: () => import("./pages/StatesPage"),
  auth: () => import("./pages/AuthPage"),
  punjab: () => import("./pages/PunjabPage"),
  delhi: () => import("./pages/DelhiPage"),
  comingSoon: () => import("./pages/ComingSoonPage"),
  planTrip: () => import("./pages/PlanTripPage"),
  finalall: () => import("./pages/Finalall"),
  store: () => import("./pages/VirasatStore"),
  blog: () => import("./pages/Blog"),
  unesco: () => import("./pages/UnescoPicksPage"),
  surprise: () => import("./pages/SurprisePage"),
  compare: () => import("./pages/CompareDetails"),
};

// Create lazy components
const RedFortPageDynamic = lazy(monumentImports.redFort);
const QutubMinar = lazy(monumentImports.qutub);
const TajMahalPage = lazy(monumentImports.taj);
const HawaMahalPage = lazy(monumentImports.hawa);
const IndiaGatePage = lazy(monumentImports.indiaGate);
const GatewayOfIndiaPage = lazy(monumentImports.gateway);
const AjantaCavesPage = lazy(monumentImports.ajanta);
const CharminarPage = lazy(monumentImports.charminar);
const KonarkSunTemplePage = lazy(monumentImports.konark);

const SambhajiMaharajPage = lazy(storyImports.sambhaji);
const AshokaPage = lazy(storyImports.ashoka);
const KhalsaBirthPage = lazy(storyImports.khalsa);
const MaharanaPratapPage = lazy(storyImports.pratap);
const MahabharataPage = lazy(storyImports.mahabharata);
const RamayanaPage = lazy(storyImports.ramayana);
const GuruGranthSahibPage = lazy(storyImports.guruGranth);
const AkbarTheGreatPage = lazy(storyImports.akbar);

const TajIntroduction = lazy(tajImports.intro);
const TajHistory = lazy(tajImports.history);
const TajArchitecture = lazy(tajImports.architecture);
const TajVisit = lazy(tajImports.visit);
const TajVirtualTour = lazy(tajImports.virtualTour);

const DancePage = lazy(otherImports.dance);
const StatesPage = lazy(otherImports.states);
const AuthPage = lazy(otherImports.auth);
const PunjabPage = lazy(otherImports.punjab);
const DelhiPage = lazy(otherImports.delhi);
const ComingSoonPage = lazy(otherImports.comingSoon);
const PlanTripPage = lazy(otherImports.planTrip);
const Finalall = lazy(otherImports.finalall);
const VirasatStore = lazy(otherImports.store);
const Blog = lazy(otherImports.blog);
const UnescoPicksPage = lazy(otherImports.unesco);
const SurprisePage = lazy(otherImports.surprise);
const CompareDetails = lazy(otherImports.compare);
const LandakhPage = lazy(() => import("./pages/LadakhPage"));
const KarnatakaPage = lazy(() => import("./pages/KarnatakaPage"));
const KeralaPage = lazy(() => import("./pages/KeralaPage"));
const AndamanNicobarPage = lazy(() => import("./pages/AndamanNicobarPage"));
const TamilNaduPage = lazy(() => import("./pages/TamilNaduPage"));
const UttarakhandPage = lazy(() => import("./pages/UttarakhandPage"));


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
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
          <Route path="/unesco" element={<UnescoPicksPage />} />
          <Route path="/surprise" element={<SurprisePage />} />
          <Route path="/compare" element={<CompareDetails />} />
          <Route path="/taj/introduction" element={<TajIntroduction />} />
          <Route path="/taj/history" element={<TajHistory />} />
          <Route path="/taj/architecture" element={<TajArchitecture />} />
          <Route path="/taj/visit" element={<TajVisit />} />
          <Route path="/taj/virtual-tour" element={<TajVirtualTour />} />
          <Route path="/union-territories/ladakh" element={<LandakhPage />} />
          <Route path="/states/karnataka" element={<KarnatakaPage />} />
          <Route path="/states/kerala" element={<KeralaPage />} />
          <Route path="/union-territories/andaman-nicobar" element={<AndamanNicobarPage />} />
          <Route path="/states/tamil-nadu" element={<TamilNaduPage />} />
          <Route path="/states/uttarakhand" element={<UttarakhandPage />} />
          <Route path="*" element={<ComingSoonPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
