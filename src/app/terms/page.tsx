import AnimatedSection from "@/components/AnimatedSection";
import { Shield } from "lucide-react";

interface Term {
  id: number;
  title: string;
  body: string;
}

async function getTerms(): Promise<Term[]> {
  try {
    const res = await fetch(`https://p.kaktusbooking.app/website/terms`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export default async function TermsPage() {
  const terms = await getTerms();

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              <Shield size={14} />
              Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-dark">
              Terms of <span className="text-primary">Service</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {terms.length === 0 ? (
            <p className="text-gray-500 text-center">No content available yet.</p>
          ) : (
            terms.map((term) => (
              <AnimatedSection key={term.id} className="mb-12">
                <h2 className="text-xl font-bold text-dark mb-4">{term.title}</h2>
                <div
                  className="prose prose-gray max-w-none prose-headings:text-dark prose-a:text-primary"
                  dangerouslySetInnerHTML={{ __html: term.body }}
                />
              </AnimatedSection>
            ))
          )}
        </div>
      </section>
    </>
  );
}
