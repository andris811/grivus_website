import Link from "next/link";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import ScrollAnimation from "../components/ScrollAnimation";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Navigation from "../components/Navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  // Load messages to get testimonials
  const messages = (await import(`../../messages/${locale}.json`)).default;
  const testimonials = messages.testimonials.items;

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Split Layout */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg3Niw0MTEsMTgzLDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-fade-in-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                {t('hero.title')}
                <span className="block text-[#4CD3B7]">{t('hero.titleHighlight')}</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                {t('hero.description')}
              </p>
              <a
                href="https://apps.apple.com/us/app/grivus-habit-tracker/id6752882832"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#4CD3B7] text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-[#3BBFA3] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                {t('hero.downloadButton')}
              </a>
            </div>
            <div className="opacity-0 animate-fade-in-right">
              <div className="aspect-[1290/2796] max-w-sm mx-auto rounded-3xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/grivus_1.png"
                  alt="Grivus App Main Screen"
                  width={1290}
                  height={2796}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-16 sm:py-20 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t('testimonials.title')}
              </h2>
              <p className="text-lg text-gray-400">
                {t('testimonials.subtitle')}
              </p>
            </div>
          </ScrollAnimation>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-24 lg:py-32 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t('features.title')}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t('features.subtitle')}
              </p>
            </div>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                titleKey: "features.visualProgress.title",
                descriptionKey: "features.visualProgress.description"
              },
              {
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                titleKey: "features.smartStreaks.title",
                descriptionKey: "features.smartStreaks.description"
              },
              {
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" /></svg>,
                titleKey: "features.widgets.title",
                descriptionKey: "features.widgets.description"
              },
              {
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                titleKey: "features.scheduling.title",
                descriptionKey: "features.scheduling.description"
              },
              {
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
                titleKey: "features.personalization.title",
                descriptionKey: "features.personalization.description"
              },
              {
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
                titleKey: "features.icloud.title",
                descriptionKey: "features.icloud.description"
              },
            ].map((feature, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:shadow-2xl hover:border-[#4CD3B7]/50 hover:-translate-y-2 transition-all duration-300">
                  <div className="text-[#4CD3B7] mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {t(feature.descriptionKey)}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots Showcase */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t('showcase.title')}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t('showcase.subtitle')}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={0}>
              <div className="flex flex-col">
                <div className="aspect-[1290/2796] rounded-3xl shadow-2xl overflow-hidden mb-6">
                  <Image
                    src="/images/grivus_2.png"
                    alt="Grivus Habit List"
                    width={1290}
                    height={2796}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{t('showcase.screen1.title')}</h3>
                <p className="text-gray-400 text-center">{t('showcase.screen1.description')}</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div className="flex flex-col">
                <div className="aspect-[1290/2796] rounded-3xl shadow-2xl overflow-hidden mb-6">
                  <Image
                    src="/images/grivus_3.png"
                    alt="Grivus Heatmap Progress"
                    width={1290}
                    height={2796}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{t('showcase.screen2.title')}</h3>
                <p className="text-gray-400 text-center">{t('showcase.screen2.description')}</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <div className="flex flex-col">
                <div className="aspect-[1290/2796] rounded-3xl shadow-2xl overflow-hidden mb-6">
                  <Image
                    src="/images/grivus_4.png"
                    alt="Grivus Custom Habit Cards"
                    width={1290}
                    height={2796}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">{t('showcase.screen3.title')}</h3>
                <p className="text-gray-400 text-center">{t('showcase.screen3.description')}</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t('contact.title')}
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                {t('contact.subtitle')}
              </p>
            </div>
          </ScrollAnimation>

          <div className="max-w-2xl mx-auto">
            <ScrollAnimation delay={200}>
              <div className="bg-gray-950 border border-gray-800 p-8 rounded-2xl hover:shadow-2xl hover:border-[#4CD3B7]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-[#4CD3B7] mt-1">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {t('contact.support.title')}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {t('contact.support.description')}
                    </p>
                    <a
                      href={`mailto:${t('contact.support.email')}`}
                      className="inline-flex items-center gap-2 text-[#4CD3B7] hover:text-[#3BBFA3] transition-colors font-medium"
                    >
                      <span>{t('contact.support.email')}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="text-2xl font-bold text-[#4CD3B7]">Grivus</div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/andrasv89/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#4CD3B7] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/andris811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#4CD3B7] transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
            <ul className="flex flex-wrap gap-6 justify-center">
              <li>
                <Link href="./legal" className="text-gray-400 hover:text-[#4CD3B7] transition-colors">
                  {t('footer.termsPrivacy')}
                </Link>
              </li>
              <li>
                <a href="mailto:avdev2024@gmail.com" className="text-gray-400 hover:text-[#4CD3B7] transition-colors">
                  {t('footer.contact')}
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-900 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
