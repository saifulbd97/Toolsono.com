import { motion } from "framer-motion";
import { ShieldCheck, Lock, Cloud, Mail, ArrowLeft, ExternalLink, UserCheck } from "lucide-react";
import { Link } from "wouter";

export default function JmmPrivacyPolicy() {
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
              Back to Home
            </span>
          </Link>
        </div>

        {/* Header */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Privacy Policy for Jute Mill Master
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Last updated: October 13, 2026 • Application: Jute Mill Master
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Jute Mill Master built the <strong>Jute Mill Master</strong> app as a Free app. This SERVICE is provided by us at no cost and is intended for use as is.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6 text-sm text-foreground shadow-sm">
          {/* Section 1: Information Collection and Use */}
          <section>
            <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-indigo-500" />
              Information Collection and Use
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to account credentials for authentication. The information that we request will be retained by us and used as described in this privacy policy.
              </p>
            </div>
          </section>

          <div className="h-px bg-border" />

          {/* Section 2: Third-Party Services (Firebase) */}
          <section>
            <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <Cloud className="w-5 h-5 text-blue-500" />
              Third-Party Services (Firebase)
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                The app does use third-party services that may collect information used to identify you.
              </p>
              <p>
                Link to the privacy policy of third-party service providers used by the app:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium hover:underline"
                  >
                    Google Cloud / Firebase Privacy Policy
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <div className="h-px bg-border" />

          {/* Section 3: Security */}
          <section>
            <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-500" />
              Security
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
              </p>
            </div>
          </section>

          <div className="h-px bg-border" />

          {/* Section 4: Contact Us */}
          <section>
            <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-emerald-500" />
              Contact Us
            </h2>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at{" "}
                <a
                  href="mailto:saifulbd97@gmail.com"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  saifulbd97@gmail.com
                </a>.
              </p>
              <div className="mt-4 p-4 bg-muted/40 rounded-xl space-y-1.5 text-xs sm:text-sm border border-border/60">
                <p>
                  <strong>Application:</strong> Jute Mill Master
                </p>
                <p>
                  <strong>Developer:</strong> Mohammad Siful Islam
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:saifulbd97@gmail.com" className="text-indigo-600 hover:underline">
                    saifulbd97@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
