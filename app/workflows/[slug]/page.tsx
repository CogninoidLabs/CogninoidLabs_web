import { notFound } from "next/navigation";
import { getBySlug, getSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/MDXComponents";
import ContentLayout from "@/components/ContentLayout";
import AtlasHero from "@/components/AtlasHero";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getSlugs("workflows").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getBySlug("workflows", slug);
  if (!item) return {};
  return {
    title: item.frontmatter.title,
    description: item.frontmatter.description,
    alternates: { canonical: `https://cogninoidlabs.com/workflows/${slug}` },
  };
}

export default async function WorkflowSlugPage({ params }: Props) {
  const { slug } = await params;
  const item = getBySlug("workflows", slug);
  if (!item) notFound();

  const prevSlug = item.frontmatter.prevSlug as string | undefined;
  const nextSlug = item.frontmatter.nextSlug as string | undefined;

  return (
    <ContentLayout
      breadcrumb={[
        { label: "Workflows", href: "/workflows" },
        { label: item.frontmatter.title, href: `/workflows/${slug}` },
      ]}
      prev={prevSlug ? { label: "Previous workflow", href: `/workflows/${prevSlug}` } : undefined}
      next={nextSlug ? { label: "Next workflow", href: `/workflows/${nextSlug}` } : undefined}
    >
      <AtlasHero
        title={item.frontmatter.title}
        description={item.frontmatter.description ?? ""}
        difficulty={item.frontmatter.difficulty}
        tags={item.frontmatter.tags}
        category="Workflow"
      />
      <MDXRemote source={item.content} components={mdxComponents} />
    </ContentLayout>
  );
}
