import { useState } from "react";
import { Link } from "wouter";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Home, ArrowLeft, FileText, ScanLine, Wand2, Compass, Sparkles } from "lucide-react";

export default function NotFound() {
  const { lang } = useTranslation();
  const [isWaving, setIsWaving] = useState(false);

  return (
    <div className="min-h-[90vh] w-full flex items-center justify-center bg-white px-4 py-8 select-none">
      <div className="w-full max-w-2xl text-center">
        {/* Custom Original Animated Vector Scene */}
        <div 
          className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={() => setIsWaving((prev) => !prev)}
          title="Click the explorer!"
        >
          {/* Subtle Ambient Floating Background Elements */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Soft Ambient Radial Glow */}
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-50/60 blur-3xl -z-10" />
          </div>

          <svg
            viewBox="0 0 600 380"
            className="w-full h-full max-h-[380px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cloudGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>

              <linearGradient id="islandGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ecfdf5" />
                <stop offset="100%" stopColor="#d1fae5" />
              </linearGradient>

              <linearGradient id="lensGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#a7f3d0" stopOpacity="0.5" />
              </linearGradient>

              <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.08" floodColor="#0f172a" />
              </filter>
            </defs>

            {/* Background Floating 404 Text */}
            <g className="font-sans font-black select-none text-slate-100" opacity="0.85">
              <motion.text
                x="80"
                y="150"
                fontSize="130"
                fill="#f1f5f9"
                fontWeight="900"
                initial={{ y: 150 }}
                animate={{ y: [150, 142, 150] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                4
              </motion.text>
              <motion.text
                x="410"
                y="150"
                fontSize="130"
                fill="#f1f5f9"
                fontWeight="900"
                initial={{ y: 150 }}
                animate={{ y: [150, 144, 150] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              >
                4
              </motion.text>
            </g>

            {/* Floating Lost Document Sheets (Toolsono PDF/File Theme) */}
            <motion.g
              initial={{ y: 0, rotate: -8 }}
              animate={{ y: [-6, 6, -6], rotate: [-8, -2, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <rect x="70" y="210" width="34" height="44" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" filter="url(#softShadow)" />
              <line x1="77" y1="222" x2="97" y2="222" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
              <line x1="77" y1="228" x2="93" y2="228" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
              <line x1="77" y1="234" x2="89" y2="234" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
            </motion.g>

            <motion.g
              initial={{ y: 0, rotate: 12 }}
              animate={{ y: [6, -6, 6], rotate: [12, 18, 12] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <rect x="490" y="195" width="36" height="46" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" filter="url(#softShadow)" />
              <line x1="498" y1="207" x2="518" y2="207" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
              <line x1="498" y1="213" x2="514" y2="213" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
              <line x1="498" y1="219" x2="510" y2="219" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
            </motion.g>

            {/* Floating Question Marks and Stars */}
            <motion.g
              initial={{ opacity: 0.3, y: 0 }}
              animate={{ opacity: [0.3, 0.9, 0.3], y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <text x="180" y="90" fontSize="26" fill="#10b981" fontWeight="bold">?</text>
              <text x="400" y="75" fontSize="20" fill="#3b82f6" fontWeight="bold">✦</text>
            </motion.g>
            <motion.g
              initial={{ opacity: 0.4, y: 0 }}
              animate={{ opacity: [0.4, 1, 0.4], y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <text x="375" y="105" fontSize="24" fill="#f59e0b" fontWeight="bold">?</text>
              <text x="195" y="70" fontSize="18" fill="#10b981" fontWeight="bold">✨</text>
            </motion.g>

            {/* Ground / Floating Soft Island */}
            <g filter="url(#softShadow)">
              <ellipse cx="300" cy="320" rx="190" ry="26" fill="url(#islandGrad)" />
              <ellipse cx="300" cy="326" rx="160" ry="14" fill="#10b981" opacity="0.12" />

              {/* Decorative Grass Tufts */}
              <path d="M 170 318 Q 174 305 178 318" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 174 319 Q 180 302 184 319" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 420 318 Q 424 306 428 318" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 425 319 Q 431 304 435 319" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" fill="none" />

              {/* Little Stepping Stones */}
              <ellipse cx="140" cy="328" rx="14" ry="5" fill="#cbd5e1" />
              <ellipse cx="460" cy="328" rx="15" ry="5" fill="#cbd5e1" />
            </g>

            {/* Character Shadow */}
            <motion.ellipse
              cx="300"
              cy="316"
              rx="46"
              ry="10"
              fill="#0f172a"
              opacity="0.14"
              animate={{ rx: [44, 48, 44], opacity: [0.14, 0.18, 0.14] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* CHARCTER: The Lost Friendly Explorer (100% Original Vector Art) */}
            <motion.g
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Legs & Shoes */}
              <path d="M 285 275 L 285 304" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
              <path d="M 315 275 L 315 304" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
              {/* Shoes */}
              <ellipse cx="282" cy="306" rx="9" ry="5" fill="#0f172a" />
              <ellipse cx="318" cy="306" rx="9" ry="5" fill="#0f172a" />

              {/* Body / Coat */}
              <path
                d="M 276 215 C 276 195, 324 195, 324 215 L 330 274 C 330 280, 270 280, 270 274 Z"
                fill="#39ac31"
              />
              {/* Coat Details & Belt */}
              <rect x="272" y="246" width="56" height="8" rx="3" fill="#1e293b" />
              <rect x="294" y="244" width="12" height="12" rx="2" fill="#fbbf24" />
              <line x1="300" y1="210" x2="300" y2="246" stroke="#2a8224" strokeWidth="2.5" />

              {/* Backpack / Compass Bag */}
              <rect x="262" y="218" width="12" height="28" rx="4" fill="#b45309" />

              {/* Left Arm (holding map / compass or waving) */}
              <motion.g
                animate={
                  isWaving
                    ? { rotate: [-10, 25, -10, 25, 0] }
                    : { rotate: [-2, 4, -2] }
                }
                style={{ transformOrigin: "272px 215px" }}
                transition={
                  isWaving
                    ? { duration: 1.2, repeat: 2 }
                    : { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <path d="M 272 215 Q 252 235 258 252" stroke="#39ac31" strokeWidth="9" strokeLinecap="round" fill="none" />
                <circle cx="258" cy="254" r="5.5" fill="#fbcfe8" />
                {/* Folded Map / Compass */}
                <rect x="246" y="248" width="18" height="15" rx="2" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" transform="rotate(-15 250 250)" />
                <line x1="250" y1="253" x2="260" y2="253" stroke="#d97706" strokeWidth="1" transform="rotate(-15 250 250)" />
              </motion.g>

              {/* Head */}
              <g>
                {/* Ears */}
                <circle cx="270" cy="178" r="6" fill="#fed7aa" />
                <circle cx="330" cy="178" r="6" fill="#fed7aa" />

                {/* Face Shape */}
                <circle cx="300" cy="176" r="28" fill="#ffedd5" />

                {/* Hair / Explorer Hat */}
                <path
                  d="M 272 165 C 275 142, 325 142, 328 165 C 318 158, 282 158, 272 165 Z"
                  fill="#78350f"
                />
                {/* Explorer Cap */}
                <ellipse cx="300" cy="154" rx="34" ry="7" fill="#d97706" />
                <path d="M 280 154 C 280 135, 320 135, 320 154 Z" fill="#b45309" />
                <rect x="280" y="150" width="40" height="4" fill="#78350f" />

                {/* Animated Eyes looking left & right */}
                <motion.g
                  animate={{ x: [-3, 3, -3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Left Eye */}
                  <circle cx="292" cy="175" r="4" fill="#0f172a" />
                  <circle cx="293.5" cy="173.5" r="1.5" fill="#ffffff" />

                  {/* Right Eye */}
                  <circle cx="308" cy="175" r="4" fill="#0f172a" />
                  <circle cx="309.5" cy="173.5" r="1.5" fill="#ffffff" />
                </motion.g>

                {/* Confused / Wondering Eyebrows */}
                <motion.path
                  d="M 287 167 Q 293 165 297 169"
                  stroke="#78350f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  animate={{ y: [0, -1.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.path
                  d="M 303 169 Q 307 165 313 167"
                  stroke="#78350f"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  animate={{ y: [0, -1.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Nose & Cute Confused Mouth */}
                <path d="M 300 177 Q 301 181 298 181" stroke="#fb923c" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                <motion.ellipse
                  cx="300"
                  cy="188"
                  rx="3.5"
                  ry="2.5"
                  fill="#0f172a"
                  animate={{ ry: [2.5, 3.5, 2.5] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />

                {/* Rosy Cheeks */}
                <circle cx="282" cy="183" r="4" fill="#f43f5e" opacity="0.25" />
                <circle cx="318" cy="183" r="4" fill="#f43f5e" opacity="0.25" />
              </g>

              {/* Right Arm: Holding Large Magnifying Glass scanning for the lost page */}
              <motion.g
                animate={{
                  rotate: [-8, 12, -8],
                }}
                style={{ transformOrigin: "326px 215px" }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M 326 215 Q 346 228 350 248" stroke="#39ac31" strokeWidth="9" strokeLinecap="round" fill="none" />
                <circle cx="351" cy="250" r="5.5" fill="#fbcfe8" />

                {/* Magnifying Glass Handle */}
                <line x1="354" y1="252" x2="378" y2="230" stroke="#78350f" strokeWidth="5.5" strokeLinecap="round" />
                <line x1="368" y1="239" x2="373" y2="234" stroke="#fbbf24" strokeWidth="6" />

                {/* Magnifying Lens Rim & Glass */}
                <circle cx="392" cy="216" r="22" fill="url(#lensGrad)" stroke="#1e293b" strokeWidth="4.5" />
                <circle cx="392" cy="216" r="21" fill="none" stroke="#6ee7b7" strokeWidth="1.5" opacity="0.7" />

                {/* Glass Glare / Reflection */}
                <path
                  d="M 382 204 Q 394 200 404 210"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.85"
                />

                {/* Question mark visible inside magnifying glass */}
                <motion.text
                  x="387"
                  y="223"
                  fontSize="16"
                  fill="#059669"
                  fontWeight="bold"
                  animate={{ scale: [0.9, 1.15, 0.9] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ?
                </motion.text>
              </motion.g>
            </motion.g>

            {/* Click to wave hint bubble */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.9, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              pointerEvents="none"
            >
              <rect x="250" y="88" width="100" height="24" rx="12" fill="#0f172a" opacity="0.8" />
              <text x="300" y="104" fontSize="11" fill="#ffffff" textAnchor="middle" fontWeight="500">
                Click me! 👋
              </text>
            </motion.g>
          </svg>
        </div>

        {/* Content Box (Exact Vibe from the Video) */}
        <motion.div
          className="-mt-4 sm:-mt-6 space-y-3 relative z-10"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200/60 mb-1">
            <Compass className="w-3.5 h-3.5" />
            {lang === "bn" ? "ভুল ঠিকানা (404 Error)" : "Page Not Found (404)"}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            {lang === "bn" ? "মনে হচ্ছে আপনি পথ হারিয়েছেন" : "Look like you're lost"}
          </h1>

          <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto leading-relaxed">
            {lang === "bn"
              ? "আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি পাওয়া যায়নি অথবা হয়তো লিঙ্কটি পরিবর্তন করা হয়েছে!"
              : "The page you are looking for is not available or might have moved!"}
          </p>

          {/* Primary Action Button (The Iconic Green Button from the Video) */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <Link href="/">
              <span className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#39ac31] hover:bg-[#2f9228] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer">
                <Home className="w-4 h-4" />
                {lang === "bn" ? "হোমে ফিরে যান" : "Go to Home"}
              </span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              {lang === "bn" ? "আগের পেজে যান" : "Go Back"}
            </button>
          </div>

          {/* Helpful Quick Shortcuts */}
          <div className="pt-6 border-t border-gray-100 mt-6 max-w-lg mx-auto">
            <p className="text-xs text-gray-400 font-medium mb-3 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              {lang === "bn" ? "প্রয়োজনীয় টুলসগুলো সরাসরি ব্যবহার করুন:" : "Or explore our popular tools directly:"}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link href="/pdf/merge">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors cursor-pointer border border-indigo-100/60">
                  <FileText className="w-3 h-3" />
                  PDF Merge
                </span>
              </Link>
              <Link href="/scanner">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors cursor-pointer border border-amber-100/60">
                  <ScanLine className="w-3 h-3" />
                  Doc Scanner
                </span>
              </Link>
              <Link href="/bg-remover">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-violet-50 text-violet-600 hover:bg-violet-100 transition-colors cursor-pointer border border-violet-100/60">
                  <Wand2 className="w-3 h-3" />
                  BG Remover
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
