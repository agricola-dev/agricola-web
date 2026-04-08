import type { LegalPageData } from '@/data/legalTypes';

interface LegalPageLayoutProps {
  data: LegalPageData;
}

export function LegalPageLayout({ data }: LegalPageLayoutProps) {
  return (
    <section className="section-padding bg-[#FDFCF9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl font-black tracking-tight text-[#081C15] mb-4">
            {data.title}
          </h1>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#081C15]/40">
            Effective {data.effectiveDate}
          </p>
          {data.intro && (
            <p className="mt-8 text-lg text-[#081C15]/60 leading-relaxed font-medium">
              {data.intro}
            </p>
          )}
        </div>

        <div className="space-y-12">
          {data.sections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-2xl font-black tracking-tight text-[#081C15]">
                {section.heading}
              </h2>
              {section.paragraphs.map((para, i) => (
                <p key={i} className="text-lg text-[#081C15]/60 leading-relaxed font-medium whitespace-pre-line">
                  {para}
                </p>
              ))}
              {section.listItems && section.listItems.length > 0 && (
                <ul className="space-y-2 ml-4">
                  {section.listItems.map((item, i) => (
                    <li key={i} className="flex gap-3 text-lg text-[#081C15]/60 font-medium">
                      <span className="text-[#1B4332] font-black mt-1">—</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
