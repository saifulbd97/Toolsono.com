import { Link } from "wouter";
import { useTranslation } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function NotFound() {
  const { lang } = useTranslation();

  return (
    <div className="min-h-[85vh] w-full flex items-center justify-center bg-white px-4 py-8 select-none">
      <motion.div
        className="w-full max-w-2xl text-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* 404 Header with Background Animation GIF */}
        <div
          className="w-full h-[320px] sm:h-[400px] bg-center bg-no-repeat bg-contain flex items-start justify-center pt-2"
          style={{
            backgroundImage: "url('/404-caveman.gif'), url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
          }}
        >
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-gray-900 tracking-tight drop-shadow-sm font-serif">
            404
          </h1>
        </div>

        {/* Content Box */}
        <div className="-mt-8 sm:-mt-12 space-y-3 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            {lang === "bn" ? "মনে হচ্ছে আপনি পথ হারিয়েছেন" : "Look like you're lost"}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto leading-relaxed">
            {lang === "bn"
              ? "আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি পাওয়া যায়নি বা সরিয়ে ফেলা হয়েছে!"
              : "The page you are looking for not available!"}
          </p>

          <div className="pt-3">
            <Link href="/">
              <span className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#39ac31] hover:bg-[#2f9628] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer">
                <Home className="w-4 h-4" />
                {lang === "bn" ? "হোমে ফিরে যান" : "Go to Home"}
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
