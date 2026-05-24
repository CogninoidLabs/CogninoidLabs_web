import { getBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/MDXComponents";
import ContentLayout from "@/components/ContentLayout";

export default async function GlossaryPage() {
  const page = getBySlug("glossary", "index");

  if (!page) {
    return (
      <main className="min-h-screen pt-24 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="section-label">Glossary</p>
          <h1 className="text-4xl font-bold text-white mb-6">Terms & Definitions</h1>
          <p className="text-slate-500">The glossary is being compiled. Check back soon.</p>
        </div>
      </main>
    );
  }

  return (
    <ContentLayout
      breadcrumb={[{ label: "Glossary", href: "/glossary" }]}
    >
      <div className="mb-8">
        <p className="section-label">Reference</p>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Glossary</h1>
        <p className="text-slate-400 text-base leading-relaxed">
          Key terms used across Cogninoid Labs — from electronics to AI to software engineering.
        </p>
      </div>
      <MDXRemote source={page.content} components={mdxComponents} />
    </ContentLayout>
  );
}
