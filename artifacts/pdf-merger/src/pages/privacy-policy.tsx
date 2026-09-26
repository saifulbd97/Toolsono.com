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
                {isBn ? "সর্বশেষ আপডেট: ২৬ সেপ্টেম্বর, ২০২৬" : "Last updated: September 26, 2026"} • Toolcraft
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {isBn
              ? "Toolcraft (ওয়েব এবং অ্যান্ড্রয়েড মোবাইল অ্যাপ্লিকেশন) আপনার গোপনীয়তা রক্ষা করতে প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতি ব্যাখ্যা করে যে আমরা কীভাবে আপনার ডেটা পরিচালনা করি, ফাইল সুরক্ষিত রাখি এবং ব্যবহারকারীর ব্যক্তিগত তথ্যের নিরাপত্তা বজায় রাখি।"
              : "Toolcraft (both web application and Android mobile app) is committed to protecting your privacy. This Privacy Policy outlines our data handling practices, security measures, and commitment to safeguarding your documents and personal information."}
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
                ? "আমাদের পরিষেবা ব্যবহার করার জন্য কোনো অ্যাকাউন্ট তৈরির প্রয়োজন নেই। আমরা আপনার নাম, ইমেইল বা পাসওয়ার্ড সংগ্রহ করি না।"
                : "You do not need to create an account or provide personal credentials to use Toolcraft. We do not store personal profiles."}
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">
              {isBn ? "ক্লায়েন্ট-সাইড প্রসেসিং" : "Client-Side Processing First"}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {isBn
                ? "বেশিরভাগ টুল (ডকুমেন্ট স্ক্যানার, স্বাক্ষর, মার্জ ইত্যাদি) সরাসরি আপনার ডিভাইসে ব্রাউজার মেমরিতে চলে। ফাইল অন্য কোথাও সংরক্ষণ হয় না।"
                : "Tools like Document Scanner, PDF Sign, and local conversions process documents directly inside your device memory without remote storage."}
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">
              {isBn ? "স্বয়ংক্রিয় তাৎক্ষণিক ফাইল ডিলিট" : "Automatic File Deletion"}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {isBn
                ? "যেসব ক্ষেত্রে ফাইল সার্ভারে প্রসেস করা হয় (যেমন ব্যাকগ্রাউন্ড রিমুভাল বা উচ্চমানের কম্প্রেশন), কাজ শেষ হওয়ার সাথে সাথে ফাইল সম্পূর্ণ মুছে ফেলা হয়।"
                : "When server processing is required (e.g. background removal or PDF compression), files are immediately purged from temporary storage upon task completion."}
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <HardDrive className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-foreground mb-1">
              {isBn ? "তৃতীয় পক্ষের সাথে কোনো বিক্রি নেই" : "No Data Selling or Sharing"}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {isBn
                ? "আমরা ব্যবহারকারীর ডেটা, স্ক্যান করা নথি বা ছবি কোনো তৃতীয় পক্ষের কাছে বিক্রি, ভাড়া বা বিজ্ঞাপন উদ্দেশ্যে শেয়ার করি না।"
                : "We do not sell, rent, monetize, or disclose your uploaded documents, images, or personal files to any third-party advertisers."}
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
                <strong>{isBn ? "ব্যবহারকারী প্রদত্ত ফাইল:" : "User-Provided Files:"}</strong>{" "}
                {isBn
                  ? "আপনি যখন কোনো পিডিএফ, ছবি বা নথি আপলোড করেন, তখন তা শুধুমাত্র আপনার কাঙ্ক্ষিত কার্যক্রম সম্পন্ন করার জন্য প্রক্রিয়া করা হয়।"
                  : "When you upload files (PDFs, images, documents), they are processed exclusively to perform your requested action (merge, compress, convert, remove background, sign)."}
              </p>
              <p>
                <strong>{isBn ? "ডিভাইস ও টেকনিক্যাল লগ:" : "Device & Technical Logs:"}</strong>{" "}
                {isBn
                  ? "আমরা কোনো ব্যক্তিগত ট্র্যাকিং বা ইউজার প্রোফাইলিং করি না। অ্যাপ্লিকেশনের কার্যক্ষমতা নিশ্চিত করার জন্য সাধারণ বেনামী এইচটিটিপি স্ট্যাটাস লগ ব্যবহার করা হতে পারে।"
                  : "We do not use device fingerprinting or aggressive analytics. Standard anonymized web request metadata may be logged temporarily to monitor system health and prevent abuse."}
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
                : "Our Android app may request runtime permissions only when strictly required for core document features:"}
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-muted-foreground">
              <li>
                <strong>Camera:</strong> {isBn ? "ডকুমেন্ট ও আইডি কার্ড সরাসরি স্ক্যান করার জন্য।" : "Used solely when you choose to scan documents or ID cards with your camera."}
              </li>
              <li>
                <strong>Storage / Media:</strong> {isBn ? "আপনার নির্বাচিত পিডিএফ বা ছবি আপলোড ও প্রসেস করা ফাইল সেভ করার জন্য।" : "Used to open documents for processing and download your finalized files to your device."}
              </li>
              <li>
                <strong>Internet:</strong> {isBn ? "ওয়েব পরিষেবা ও টুল সংযোগের জন্য।" : "Required for fetching server-side conversion tasks and web app services."}
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
                ? "Toolcraft কোনো ১৩ বছরের কম বয়সী শিশুদের থেকে জেনেশুনে কোনো ব্যক্তিগত তথ্য সংগ্রহ করে না। আমাদের অ্যাপ্লিকেশন সর্বসাধারণের উপযোগী এবং নিরাপদ।"
                : "Toolcraft does not knowingly collect personally identifiable information from children under the age of 13. Our application complies with applicable child safety guidelines."}
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
              <p><strong>Developer:</strong> Mohammad Saiful Islam</p>
              <p><strong>Email:</strong> <a href="mailto:saifulbd97@gmail.com" className="text-indigo-600 hover:underline">saifulbd97@gmail.com</a></p>
              <p><strong>Application:</strong> Toolcraft</p>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
