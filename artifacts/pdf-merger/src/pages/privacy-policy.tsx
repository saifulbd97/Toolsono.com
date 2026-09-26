import { motion } from "framer-motion";
import { ShieldCheck, Lock, EyeOff, Server, HardDrive, RefreshCw, Mail, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "@/lib/i18n";

export default function PrivacyPolicy() {
  const { lang } = useTranslation();
  const isBn = lang === "bn";

  return (
    <div className="min-h-[100dvh] bg-background py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Back Link */}
        <div className="mb-6">
          <Link href="/">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              {isBn ? "হোমে ফিরে যান" : "Back to Home"}
            </span>
          </Link>
        </div>

        {/* Header */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                {isBn ? "গোপনীয়তা নীতি (Privacy Policy)" : "Privacy Policy"}
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {isBn ? "সর্বশেষ আপডেট: ২৬ সেপ্টেম্বর, ২০২৬" : "Last updated: September 26, 2026"} • Daily Expense Tracker
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "Daily Expense Tracker (ওয়েব এবং অ্যান্ড্রয়েড মোবাইল অ্যাপ্লিকেশন) আপনার গোপনীয়তা রক্ষা করতে গভীরভাবে প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতি ব্যাখ্যা করে যে আমরা কীভাবে আপনার দৈনন্দিন আয়-ব্যয় এবং ব্যক্তিগত ডেটার নিরাপত্তা ও গোপনীয়তা বজায় রাখি।"
              : "Daily Expense Tracker (both web application and Android mobile app) is deeply committed to protecting your privacy. This Privacy Policy outlines how we handle your income and expense records, receipts, and personal data with complete confidentiality."}
          </p>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-5 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <EyeOff className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">
              {isBn ? "কোনো অ্যাকাউন্ট বা সাইন-আপ নেই" : "No Sign-up or Accounts Required"}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {isBn
                ? "আমাদের পরিষেবা ব্যবহার করার জন্য কোনো বাধ্যতামূলক অ্যাকাউন্ট বা ব্যক্তিগত পরিচয় দেওয়ার প্রয়োজন নেই। আমরা আপনার পাসওয়ার্ড বা ব্যাঙ্ক তথ্য সংগ্রহ করি না।"
                : "You do not need to provide personal credentials or banking credentials to use Daily Expense Tracker. We do not store sensitive bank logins."}
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">
              {isBn ? "ডিভাইসেই ডাটা সুরক্ষিত (Local Storage)" : "On-Device Data Storage"}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {isBn
                ? "আপনার সমস্ত খরচের হিসাব, লেনদেনের তালিকা এবং আর্থিক ডেটা সরাসরি আপনার ডিভাইসের মেমরিতে সুরক্ষিত থাকে।"
                : "Your expense logs, transaction details, and financial entries are safely stored directly within your local device memory."}
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">
              {isBn ? "কোনো গোপন ট্র্যাকিং নেই" : "Zero Hidden Tracking"}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {isBn
                ? "আমরা আপনার আর্থিক লেনদেন পর্যবেক্ষণ করি না এবং কোনো তৃতীয় পক্ষের ট্র্যাকার বা গোপন অ্যালগরিদম ব্যবহার করি না।"
                : "We do not monitor your financial habits or deploy hidden third-party behavioral trackers."}
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">
              {isBn ? "তৃতীয় পক্ষের কাছে বিক্রি সম্পূর্ণ নিষিদ্ধ" : "No Data Selling or Sharing"}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {isBn
                ? "আপনার আর্থিক বা ব্যক্তিগত তথ্য কোনো বিজ্ঞাপনদাতা বা ডেটা ব্রোকারের কাছে কখনোই বিক্রি বা শেয়ার করা হয় না।"
                : "Your income, expense logs, receipts, and personal data are never monetized, rented, or sold to third-party advertisers."}
            </p>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6 text-sm text-foreground">
          <section>
            <h2 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
              <Server className="w-4 h-4 text-indigo-500" />
              {isBn ? "১. আমরা কী তথ্য সংগ্রহ করি?" : "1. Information We Collect"}
            </h2>
            <div className="space-y-2 text-muted-foreground leading-relaxed">
              <p>
                <strong>{isBn ? "আয়-ব্যয়ের রেকর্ড ও রশিদ:" : "Expense & Income Records:"}</strong>{" "}
                {isBn
                  ? "আপনি যেসকল আয়, ব্যয়ের পরিমাণ, ক্যাটাগরি ও রশিদের ছবি যোগ করেন, তা শুধুমাত্র আপনার ব্যক্তিগত হিসাব প্রদর্শনের জন্য আপনার ডিভাইসে সংরক্ষিত থাকে।"
                  : "All expense categories, amounts, dates, and optional receipt scans you input are stored locally on your device to generate your personal budget summaries."}
              </p>
              <p>
                <strong>{isBn ? "ব্যাঙ্ক সংক্রান্ত তথ্য:" : "Banking Information:"}</strong>{" "}
                {isBn
                  ? "Daily Expense Tracker কোনো ধরনের ডেবিট/ক্রেডিট কার্ড নম্বর, সিভিসি বা ব্যাঙ্ক অ্যাকাউন্ট লগইন সংগ্রহ বা অ্যাক্সেস করে না।"
                  : "Daily Expense Tracker does NOT collect or access credit/debit card numbers, CVVs, PINs, or direct bank login credentials."}
              </p>
            </div>
          </section>

          <div className="h-px bg-border" />

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              {isBn ? "২. মোবাইল অ্যাপ পারমিশন (Google Play Store)" : "2. Android Permissions (Google Play Store)"}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              {isBn
                ? "আমাদের অ্যান্ড্রয়েড অ্যাপ্লিকেশনে নিচের সুবিধাগুলো দেওয়ার জন্য নির্দিষ্ট কিছু অনুমতির প্রয়োজন হতে পারে:"
                : "Our Android application requests permissions only when strictly necessary for user-initiated actions:"}
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-muted-foreground">
              <li>
                <strong>Camera:</strong> {isBn ? "ভাউচার বা রশিদের ছবি তুলে খরচের সাথে যুক্ত করার জন্য।" : "Optional, used solely if you take photos of paper receipts or expense bills."}
              </li>
              <li>
                <strong>Storage / Media:</strong> {isBn ? "খরচের হিসাবের রিপোর্ট (PDF/Excel) এক্সপোর্ট ও রশিদের ছবি সংরক্ষণ করার জন্য।" : "Used to save exported expense reports or import receipt images from your device."}
              </li>
              <li>
                <strong>Internet:</strong> {isBn ? "অ্যাপ আপডেট ও সাধারণ ক্লাউড সিঙ্ক ফিচারের জন্য (যদি প্রযোজ্য হয়)।" : "Required for web services and updates."}
              </li>
            </ul>
          </section>

          <div className="h-px bg-border" />

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              {isBn ? "৩. শিশুদের গোপনীয়তা (Children's Privacy)" : "3. Children's Privacy"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isBn
                ? "Daily Expense Tracker কোনো ১৩ বছরের কম বয়সী শিশুদের থেকে জেনেশুনে কোনো ব্যক্তিগত তথ্য সংগ্রহ করে না। আমাদের অ্যাপ্লিকেশন সর্বসাধারণের উপযোগী এবং নিরাপদ।"
                : "Daily Expense Tracker does not knowingly collect personally identifiable information from children under the age of 13. Our application complies with applicable child safety guidelines."}
            </p>
          </section>

          <div className="h-px bg-border" />

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2">
              {isBn ? "৪. নীতিমালার পরিবর্তন" : "4. Changes to This Privacy Policy"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isBn
                ? "আমরা সময়ে সময়ে এই গোপনীয়তা নীতি আপডেট করতে পারি। যেকোনো পরিবর্তন এই পৃষ্ঠায় নতুন 'সর্বশেষ আপডেট' তারিখসহ প্রকাশ করা হবে।"
                : "We may update our Privacy Policy periodically. Any updates will be reflected directly on this page with an updated revision date."}
            </p>
          </section>

          <div className="h-px bg-border" />

          <section>
            <h2 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-500" />
              {isBn ? "৫. যোগাযোগ" : "5. Contact Us"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {isBn
                ? "গোপনীয়তা নীতি সম্পর্কে আপনার কোনো প্রশ্ন বা পরামর্শ থাকলে সরাসরি ডেভেলপারের সাথে যোগাযোগ করতে পারেন:"
                : "If you have any questions, concerns, or requests regarding this Privacy Policy, please contact the developer directly:"}
            </p>
            <div className="mt-3 p-4 bg-muted/40 rounded-xl space-y-1 text-xs sm:text-sm">
              <p><strong>Developer:</strong> Mohammad Siful Islam</p>
              <p><strong>Email:</strong> <a href="mailto:saifulbd97@gmail.com" className="text-indigo-600 hover:underline">saifulbd97@gmail.com</a></p>
              <p><strong>Application:</strong> Daily Expense Tracker</p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
