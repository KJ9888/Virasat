import { MotionConfig, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import TextType from "../components/TextType";
import ThemeToggle from "../components/ThemeToggle";
import { useEffect, useState } from "react";
// ADD these imports
import { useLocation, useNavigate } from "react-router-dom"; // for reading + clearing state [web:23]

// ADD this component near the top of the file (below helpers is fine)
const ToastOnArrival = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const toast = (location.state as any)?.toast;

  useEffect(() => {
    if (!toast) return;
    // Example: simple inline banner. Replace with your SuccessPanel if you prefer.
    const timer = setTimeout(() => {
      // Clear state so it doesn't reappear on refresh/back
      navigate(location.pathname, { replace: true, state: null });
    }, 2500);
    return () => clearTimeout(timer);
  }, [toast, location.pathname, navigate]);

  if (!toast) return null;

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 40, opacity: 0 }}
      transition={{ type: "spring", stiffness: 280, damping: 26 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70]
                 w-[92%] max-w-md rounded-2xl border border-amber-300/30
                 bg-[#151014]/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                 px-5 py-4 text-amber-100"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-300">
            <path fill="currentColor" d="M9.0 16.2L4.8 12l1.4-1.4l2.8 2.8l8.6-8.6L19 6.2z" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="font-semibold">{toast.title || "Success"}</div>
          <div className="text-amber-200/85 text-sm">
            Welcome {toast.name?.split(" ")[0] || "back"} — enjoy the journey through Virasat.
          </div>
        </div>
      </div>
    </motion.div>
  );
};


const IMAGE_LINKS = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg", href: "/monuments/taj-mahal" },
  { src: "https://m.media-amazon.com/images/I/91odtfOhJ-L.jpg", href: "/stories/ramayana" },
  { src: "https://www.bvashram.org/wp-content/uploads/2005/11/mahabharata-01.jpg", href: "/stories/mahabharata" },
  { src: "https://static.toiimg.com/photo/108178837.cms", href: "/states/punjab" },
  { src: "https://pbs.twimg.com/media/Ftsfy_oWIBcMy2B.jpg", href: "/stories/khalsa-birth" },
  { src: "https://www.omaxe.com/blog/wp-content/uploads/2024/05/Investment-in-Delhi.jpg", href: "/union-territories/delhi" },
];

const VISIBLE_COUNT = 6;

const ParallaxLayer = ({ speed = 0.1, className = "" }: { speed?: number; className?: string }) => {
  const { scrollY } = useScroll();
  const prefersReduced = useReducedMotion();
  const y = useTransform(scrollY, [0, 600], [0, prefersReduced ? 0 : -600 * speed]);
  return <motion.div aria-hidden="true" style={{ y }} className={className} />;
};

const SingleRowCarousel = () => {
  const prefersReduced = useReducedMotion();
  const items = IMAGE_LINKS.slice(0, VISIBLE_COUNT);
  const row = [...items, ...items];

  if (prefersReduced) {
    return (
      <div className="mt-7 w-full max-w-[1200px] mx-auto overflow-hidden">
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 place-items-center">
          {items.map(({ src, href }, i) => (
            <Link key={i} to={href} aria-label={`Open ${href}`}>
              <img
                src={src}
                alt=""
                className="h-40 md:h-48 w-[180px] md:w-[220px] object-cover rounded-2xl border border-[#DDD6C9] dark:border-amber-200/20 shadow-sm dark:shadow-none hover:opacity-95 transition"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 w-full mx-auto select-none max-w-[1100px] md:max-w-[1300px] relative overflow-hidden">
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#E0DBD1] to-transparent/0 dark:from-[#0f0b09] dark:to-transparent/0" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#E0DBD1] to-transparent/0 dark:from-[#0f0b09] dark:to-transparent/0" />

      <motion.div
        className="flex gap-5 md:gap-6 will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 42, repeat: Infinity }}
        aria-label="Heritage image showcase"
      >
        {row.map(({ src, href }, i) => (
          <Link key={i} to={href} aria-label={`Open ${href}`} className="group relative shrink-0">
            <motion.img
              src={src}
              alt=""
              className="h-40 md:h-48 w-[180px] md:w-[220px] rounded-2xl object-cover border border-[#DDD6C9] dark:border-amber-200/20 shadow-sm dark:shadow-none"
              whileHover={{ scale: 1.04 }}
              draggable={false}
              loading="lazy"
              fetchPriority={i === 0 ? "high" : "auto" as any}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/15 transition" />
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

const MagneticButton = ({ children, className = "", ...props }: any) => {
  return (
    <motion.button
      whileHover={{ scale: 1.045 }}
      whileTap={{ scale: 0.965 }}
      onMouseMove={(e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left, y = e.clientY - rect.top;
        target.style.setProperty("--mx", `${x}px`);
        target.style.setProperty("--my", `${y}px`);
      }}
      className={`relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(200px_circle_at_var(--mx)_var(--my),rgba(255,220,150,0.18),transparent_60%)] before:opacity-0 hover:before:opacity-100 before:transition-opacity ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};



const HeroSection = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"
  );

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme") setTheme(e.newValue === "dark" ? "dark" : "light");
    };
    window.addEventListener("storage", onStorage);

    const onClassChange = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    };
    const mo = new MutationObserver(onClassChange);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("storage", onStorage);
      mo.disconnect();
    };
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <ToastOnArrival /> {/* NEW: toast component to show messages on arrival */}
      <header
        id="home"
        aria-label="Virasat — Bharat ki Amar Dharohar"
        className="
          relative min-h-[100svh] flex flex-col justify-center items-center text-center
          px-6 md:px-10 overflow-hidden
          bg-[#FFF9E6] text-[#4e342e]
          dark:bg-gradient-to-b dark:from-[#0b0b12] dark:via-[#14111d] dark:to-[#0f0907] dark:text-amber-100/95
        "
      >
        {/* Edge vignette */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_80%_at_50%_50%,rgba(0,0,0,0)_38%,rgba(0,0,0,0.5)_100%)]"
        />

        {/* Subtle parchment + warm glow */}
        <ParallaxLayer
          speed={0.06}
          className="absolute inset-0 opacity-[0.14] pointer-events-none bg-[url('/textures/aged-paper.webp')] bg-repeat mix-blend-overlay"
        />
        <ParallaxLayer
          speed={0.12}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120vmin] h-[120vmin] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,204,128,0.15),rgba(0,0,0,0))] blur-2xl pointer-events-none"
        />

        {/* Side ornaments */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 h-44 w-1 rounded-full bg-gradient-to-b from-amber-200/40 via-transparent to-amber-200/40 dark:via-amber-300/0"
        />
        <div
          aria-hidden="true"
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 h-44 w-1 rounded-full bg-gradient-to-b from-amber-200/40 via-transparent to-amber-200/40 dark:via-amber-300/0"
        />

        {/* Top motif line */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[88%] max-w-6xl h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent"
        />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
  text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold
  bg-gradient-to-r from-[#C98000] via-[#E07B00] to-[#C84900]
  text-transparent bg-clip-text tracking-wide
  [text-shadow:0_1px_0_rgba(0,0,0,0.25),0_2px_16px_rgba(224,123,0,0.35)]
  dark:bg-gradient-to-r dark:from-yellow-300 dark:via-amber-400 dark:to-orange-500
  dark:[text-shadow:0_0_22px_rgba(255,185,80,0.45)]
"
>
          VIRASAT
        </motion.h1>

        {/* Sanskrit subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
         className="
  mt-1 text-base md:text-lg italic
  text-[#1F1F1F]
  [text-shadow:0_1px_0_rgba(255,255,255,0.7)]
  dark:text-amber-300/95 dark:[text-shadow:none]
"

        >
          — भारत की अमर धरोहर —
        </motion.p>

        <div className="
  mt-5 text-xl md:text-2xl font-semibold
  text-[#222222]
  [text-shadow:0_1px_0_rgba(255,255,255,0.6)]
  dark:text-amber-100/95 dark:[text-shadow:none]
">
  <TextType
    text="Where Timeless India Lives"
    speed={36}
    textColors={theme === "dark" ? ["#FDE7A6"] : ["#222222"]}
  />
</div>


        {/* Action chips */}
        <nav aria-label="Quick navigation" className="mt-4 max-w-3xl w-full flex flex-wrap justify-center gap-2" >
          {[
            { to: "/monuments", label: "Monuments", icon: "🏛️" },
            { to: "/stories", label: "Stories", icon: "📖" },
            { to: "/states", label: "States & UTs", icon: "🗺️" },
            { to: "/plan-trip", label: "Plan your trip", icon: "📍" },
            { to: "/store-virasat-store", label: "Store", icon: "🛍️" },
            { to: "/blog", label: "Blog", icon: "✒️" },
            { to: "/auth", label: "Login", icon: "🔑" },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="group" >
              <span
              
                className="
                  inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                  border border-[#D8D3C8] text-[#1E1E1E] bg-[rgba(160,140,100,0.10)]
                  hover:border-[#C8C2B6] hover:bg-[rgba(160,140,100,0.16)]
                  dark:border-amber-300/25 dark:text-amber-100/95 dark:bg-amber-300/10
                  transition shadow-[inset_0_0_0_rgba(0,0,0,0)]
                  hover:shadow-[0_6px_18px_rgba(255,195,120,0.12)] relative overflow-hidden
                "
              >
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(120px_circle_at_var(--mx)_var(--my),rgba(255,228,170,0.16),transparent_60%)]"
                  aria-hidden="true"
                />
                <span
                  className="relative"
                  onMouseMove={(e) => {
                    const t = e.currentTarget.parentElement as HTMLSpanElement;
                    const r = t.getBoundingClientRect();
                    t.style.setProperty("--mx", `${e.clientX - r.left}px`);
                    t.style.setProperty("--my", `${e.clientY - r.top}px`);
                  }}
                >
                  <span aria-hidden="true">{c.icon}</span> {c.label}
                </span>
              </span>
            </Link>
          ))}
          {/* Theme toggle right next to Login chip */}
          <ThemeToggle />
        </nav>

        {/* Single-row carousel (6 visible) */}
        <SingleRowCarousel />

        {/* Divider */}
        <motion.div
          role="separator"
          aria-hidden="true"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "240px", opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 h-[2px] rounded-full bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-500 shadow-[0_0_10px_#f5c86d]"
        />

        {/* Primary CTA */}
        <nav className="mt-7 flex justify-center">
          <Link to="/states" aria-label="Explore the States of India">
            <MagneticButton
              className="
                px-9 py-3 rounded-full font-semibold
                
                border border-yellow-400/50
                shadow-lg [box-shadow:0_10px_22px_rgba(107,78,26,0.14)]
                hover:opacity-95
                font-serif text-lg tracking-wide
                text-yellow-100 bg-gradient-to-r from-[#5a3411] to-[#8b4513] shadow-yellow-700/30
                transition
              "
            >
              Explore the Legacy
            </MagneticButton>
          </Link>
        </nav>

        {/* Bottom motif line */}
        <div
          aria-hidden="true"
          className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[86%] max-w-5xl h-px bg-gradient-to-r from-transparent via-amber-300/45 to-transparent dark:via-amber-300/55"
        />
      </header>
    </MotionConfig>
  );
};

export default HeroSection;
