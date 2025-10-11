import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

type Mode = "login" | "signup";

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  name,
  autoComplete,
  required = false,
  error = "",
  minLength,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  name: string;
  autoComplete?: string;
  required?: boolean;
  error?: string;
  minLength?: number;
}) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";
  const actualType = isPassword && show ? "text" : type;

  return (
    <label className="block text-left w-full">
      <span className="text-amber-200/90 text-sm">{label}</span>
      <div className="mt-1 relative">
        <input
          name={name}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={actualType}
          required={required}
          minLength={minLength}
          className={`
            w-full rounded-xl bg-white/5 border
            ${error ? "border-red-400/70" : "border-amber-300/25"}
            text-amber-100 placeholder:text-amber-200/50
            px-4 py-3 focus:outline-none focus:ring-2
            ${error ? "focus:ring-red-400/60" : "focus:ring-amber-300/40"}
          `}
          placeholder={label}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-amber-200/80 hover:text-amber-100 transition text-sm"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-[13px] text-red-300/90">{error}</p>}
    </label>
  );
};

// Fancy success panel with check badge + subtle confetti sparks
const SuccessPanel = ({ open, name, onClose }: { open: boolean; name?: string; onClose: () => void }) => {
  // random spark positions
  const sparks = useMemo(
    () => Array.from({ length: 16 }, () => ({ x: Math.random() * 100, d: 0.6 + Math.random() * 0.8 })),
    []
  );

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, 2500);
    return () => clearTimeout(t);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black pointer-events-none z-[60]"
          />
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70]
                       w-[92%] max-w-md rounded-2xl border border-amber-300/30
                       bg-[#151014]/95 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                       px-5 py-4 text-amber-100"
            role="status"
            aria-live="polite"
          >
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
                <motion.svg
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-emerald-300"
                >
                  <path
                    fill="currentColor"
                    d="M9.0 16.2L4.8 12l1.4-1.4l2.8 2.8l8.6-8.6L19 6.2z"
                  />
                </motion.svg>
                {/* subtle ring pulse */}
                <motion.span
                  className="absolute inset-0 rounded-full border border-emerald-400/40"
                  initial={{ scale: 1, opacity: 0.7 }}
                  animate={{ scale: 1.35, opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                />
              </div>
              <div className="flex-1">
                <div className="font-semibold">Logged in</div>
                <div className="text-amber-200/85 text-sm">
                  Welcome {name?.split(" ")[0] || "back"} — enjoy the journey through Virasat.
                </div>
              </div>
              <button onClick={onClose} className="text-amber-200/80 hover:text-amber-100 text-sm">Close</button>
            </div>
            {/* confetti sparks */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {sparks.map((s, i) => (
                <motion.span
                  key={i}
                  className="absolute h-1 w-1 rounded-full"
                  style={{ left: `${s.x}%`, background: "linear-gradient(90deg,#facc15,#f59e0b)" }}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: -20, opacity: [0, 1, 0] }}
                  transition={{ duration: s.d, repeat: Infinity, repeatDelay: 0.8, ease: "easeOut" }}
                />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string; confirm?: string; name?: string }>({});
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);

  const switchMode = () => {
    setMode((m) => (m === "login" ? "signup" : "login"));
    setPassword("");
    setConfirm("");
    setErrors({});
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!EMAIL_REGEX.test(email)) e.email = "Enter a valid email address";
    if (!password || password.length < 6) e.password = "Password must be at least 6 characters";
    if (mode === "signup") {
      if (!name.trim()) e.name = "Full name is required";
      if (confirm !== password) e.confirm = "Passwords do not match";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900)); // simulate API
    setLoading(false);
    setOk(true);
  };

  // Equal card heights: fix consistent min-h
  const cardMinH = "min-h-[460px]";

  return (
    <MotionConfig reducedMotion="user">
      <div
        className="
          min-h-[100svh] w-full flex items-center justify-center
          bg-gradient-to-b from-[#0b0b12] via-[#14111d] to-[#0f0907]
          relative overflow-hidden px-6
          font-[system-ui,ui-sans-serif,Segoe UI,Roboto,Inter,Helvetica,Arial]
        "
      >
        {/* Ambient layers */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_80%_at_50%_20%,rgba(255,204,128,0.12),rgba(0,0,0,0)_60%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_90%_at_50%_60%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.55)_100%)]" />

        <div className="relative w-full max-w-[1000px]">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
            className="mx-auto grid md:grid-cols-2 gap-6"
          >
            {/* Left hero-card */}
            <div className="hidden md:block">
              <div className={`relative w-full ${cardMinH} rounded-3xl overflow-hidden
                              border border-amber-300/25 bg-white/5 backdrop-blur-md
                              shadow-[0_10px_40px_rgba(0,0,0,0.35)]`}>
                <div className="absolute inset-0 bg-[url('/textures/aged-paper.webp')] opacity-[0.12] mix-blend-overlay" />
                <div className="absolute inset-6 rounded-2xl border border-amber-200/20 pointer-events-none" />
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-2xl
                                bg-[radial-gradient(circle_at_center,rgba(255,204,128,0.18),transparent)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="text-amber-200/90 text-xl">Welcome to</div>
                    <div className="mt-1 text-4xl font-serif text-amber-100 tracking-wide">VIRASAT</div>
                    <div className="mt-3 text-amber-200/85 text-sm">Stories • Monuments • States & UTs</div>
                    <div className="mt-8 h-[2px] w-56 mx-auto rounded-full
                                    bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-500
                                    opacity-80 shadow-[0_0_10px_#f5c86d]" />
                    <p className="mt-6 text-amber-100/90 leading-relaxed text-[15px]">
                      Discover living heritage, timeless arts, and journeys across Bharat’s sacred landscapes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right auth card */}
            <div className="w-full">
              <div className={`rounded-3xl border border-amber-300/25 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.35)] ${cardMinH} flex flex-col`}>
                <div className="flex items-center justify-between">
                  <h2 className="text-amber-100 text-2xl font-semibold">
                    {mode === "login" ? "Login" : "Sign up"}
                  </h2>
                  <button
                    onClick={switchMode}
                    className="text-amber-200/90 hover:text-amber-100 underline/30"
                  >
                    {mode === "login" ? "Sign up" : "Back to login"}
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4 flex-1 flex flex-col">
                  {mode === "signup" && (
                    <Input
                      label="Full name"
                      name="name"
                      value={name}
                      onChange={setName}
                      autoComplete="name"
                      required
                      error={errors.name}
                    />
                  )}

                  <Input
                    label="Email"
                    name="email"
                    value={email}
                    onChange={setEmail}
                    autoComplete="email"
                    required
                    error={errors.email}
                  />

                  <Input
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={setPassword}
                    autoComplete={mode === "login" ? "current-password" : "new-password"}
                    required
                    minLength={6}
                    error={errors.password}
                  />

                  {mode === "signup" && (
                    <Input
                      label="Confirm password"
                      type="password"
                      name="confirm"
                      value={confirm}
                      onChange={setConfirm}
                      autoComplete="new-password"
                      required
                      minLength={6}
                      error={errors.confirm}
                    />
                  )}

                  <div className="flex items-center justify-between pt-2">
                    <label className="inline-flex items-center gap-2 text-amber-200/80 text-sm">
                      <input type="checkbox" className="accent-amber-400/80" />
                      Remember me
                    </label>
                    {mode === "login" && (
                      <button type="button" className="text-amber-200/90 hover:text-amber-100 underline/30 text-sm">
                        Forgot password?
                      </button>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="
                      relative mt-2 w-full px-5 py-3 rounded-2xl font-semibold
                      text-yellow-100 bg-gradient-to-r from-[#5a3411] to-[#8b4513]
                      border border-yellow-400/50 shadow-lg shadow-yellow-700/30
                      hover:from-[#6a3e14] hover:to-[#9a561f] transition
                    "
                  >
                    {loading ? "Please wait..." : mode === "login" ? "Login" : "Sign up"}
                    <span className="absolute inset-0 rounded-2xl pointer-events-none
                                     bg-[radial-gradient(220px_circle_at_50%_0%,rgba(255,220,150,0.14),rgba(0,0,0,0)_60%)]
                                     opacity-0 hover:opacity-100 transition" />
                  </motion.button>

                  <div className="text-center text-amber-200/80 text-sm">
                    {mode === "login" ? (
                      <>
                        Don’t have an account?{" "}
                        <button type="button" onClick={switchMode} className="text-amber-200 hover:text-amber-100 underline/30">
                          Sign up
                        </button>
                      </>
                    ) : (
                      <>
                        Already have an account?{" "}
                        <button type="button" onClick={switchMode} className="text-amber-200 hover:text-amber-100 underline/30">
                          Back to login
                        </button>
                      </>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        <SuccessPanel open={ok} name={name} onClose={() => setOk(false)} />
      </div>
    </MotionConfig>
  );
}
