import Link from "next/link";
import { getTranslations } from 'next-intl/server';
import LanguageSelector from "../../components/LanguageSelector";

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href=".." className="text-2xl font-bold text-[#4CD3B7]">
              Grivus
            </Link>
            <div className="flex items-center gap-6">
              <LanguageSelector />
              <Link
                href=".."
                className="text-gray-300 hover:text-[#4CD3B7] transition-colors"
              >
                {t('legal.backToHome')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t('legal.title')}
          </h1>

          <div className="text-gray-400 mb-2">
            <strong>{t('legal.effectiveDate')}</strong> {t('legal.effectiveDateValue')}
          </div>
          <div className="text-gray-400 mb-8">
            <strong>{t('legal.lastUpdated')}</strong> {t('legal.lastUpdatedValue')}
          </div>

          <p className="text-gray-300 text-lg mb-12">
            {t('legal.welcome')}
          </p>

          {/* General Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#4CD3B7] mb-6">{t('legal.section1.title')}</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                {t('legal.section1.p1')}
              </p>
              <p>
                {t('legal.section1.p2')}
              </p>
              <p>
                {t('legal.section1.p3')}
              </p>
            </div>
          </section>

          {/* Terms of Use */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#4CD3B7] mb-6">{t('legal.section2.title')}</h2>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{t('legal.section2.s1.title')}</h3>
                <p>
                  {t('legal.section2.s1.content')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{t('legal.section2.s2.title')}</h3>
                <p>
                  {t('legal.section2.s2.content')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{t('legal.section2.s3.title')}</h3>
                <p>
                  {t('legal.section2.s3.p1')}
                </p>
                <p>
                  {t('legal.section2.s3.p2')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{t('legal.section2.s4.title')}</h3>
                <p>
                  {t('legal.section2.s4.content')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{t('legal.section2.s5.title')}</h3>
                <p>
                  {t('legal.section2.s5.content')}
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#4CD3B7] mb-6">{t('legal.section3.title')}</h2>
            <p className="text-gray-300 mb-6">
              {t('legal.section3.intro')}
            </p>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{t('legal.section3.s1.title')}</h3>
                <p>
                  <strong>{t('legal.section3.s1.personalData')}</strong> {t('legal.section3.s1.personalDataText')}
                </p>
                <p>
                  <strong>{t('legal.section3.s1.appData')}</strong> {t('legal.section3.s1.appDataText')}
                </p>
                <p>
                  <strong>{t('legal.section3.s1.analytics')}</strong> {t('legal.section3.s1.analyticsText')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{t('legal.section3.s2.title')}</h3>
                <p>
                  {t('legal.section3.s2.p1')}
                </p>
                <p>
                  {t('legal.section3.s2.p2')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{t('legal.section3.s3.title')}</h3>
                <p>
                  {t('legal.section3.s3.p1')}
                </p>
                <p>
                  {t('legal.section3.s3.p2')}
                </p>
                <p>
                  {t('legal.section3.s3.p3')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{t('legal.section3.s4.title')}</h3>
                <p>
                  {t('legal.section3.s4.p1')}
                </p>
                <p>
                  {t('legal.section3.s4.p2')}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{t('legal.section3.s5.title')}</h3>
                <p>
                  {t('legal.section3.s5.content')}
                </p>
              </div>
            </div>
          </section>

          {/* Pro Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#4CD3B7] mb-6">{t('legal.section4.title')}</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                {t('legal.section4.p1')}
              </p>
              <p>
                {t('legal.section4.p2')}
              </p>
              <p>
                {t('legal.section4.p3')}
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#4CD3B7] mb-6">{t('legal.section5.title')}</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                {t('legal.section5.p1')}
              </p>
              <p>
                {t('legal.section5.p2')}
              </p>
            </div>
          </section>

          {/* Updates */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#4CD3B7] mb-6">{t('legal.section6.title')}</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                {t('legal.section6.p1')}
              </p>
              <p>
                {t('legal.section6.p2')}
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#4CD3B7] mb-6">{t('legal.section7.title')}</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                {t('legal.section7.intro')}
              </p>
              <p>
                📧{' '}
                <a href="mailto:avdev2024@gmail.com" className="text-[#4CD3B7] hover:underline">
                  avdev2024@gmail.com
                </a>
              </p>
              <p>
                <a href="https://andris811.github.io/avdev/" target="_blank" rel="noopener noreferrer" className="text-[#4CD3B7] hover:underline">
                  {t('legal.section7.visitWebsite')}
                </a>
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 mb-2">
              {t('legal.footer.copyright')}
            </p>
            <p className="text-[#4CD3B7] font-semibold">
              {t('legal.footer.tagline')}
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
