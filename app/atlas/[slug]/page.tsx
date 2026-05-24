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
  return getSlugs("atlas").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getBySlug("atlas", slug);
  if (!item) return {};
  return {
    title: item.frontmatter.title,
    description: item.frontmatter.description,
    alternates: { canonical: `https://cogninoidlabs.com/atlas/${slug}` },
  };
}

export default async function AtlasSlugPage({ params }: Props) {
  const { slug } = await params;
  const item = getBySlug("atlas", slug);
  if (!item) notFound();

  return (
    <ContentLayout
      breadcrumb={[
        { label: "Atlas", href: "/atlas" },
        { label: item.frontmatter.title, href: `/atlas/${slug}` },
      ]}
    >
      <AtlasHero
        title={item.frontmatter.title}
        description={item.frontmatter.description ?? ""}
        difficulty={item.frontmatter.difficulty}
        tags={item.frontmatter.tags}
        category={item.frontmatter.category as string ?? "Cogninoid Atlas"}
      />
      <MDXRemote source={item.content} components={mdxComponents} />
    </ContentLayout>
  );
}
