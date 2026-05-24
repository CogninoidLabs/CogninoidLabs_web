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
  return getSlugs("start-here").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getBySlug("start-here", slug);
  if (!item) return {};
  return {
    title: item.frontmatter.title,
    description: item.frontmatter.description,
    alternates: { canonical: `https://cogninoidlabs.com/start-here/${slug}` },
  };
}

export default async function StartHereSlugPage({ params }: Props) {
  const { slug } = await params;
  const item = getBySlug("start-here", slug);
  if (!item) notFound();

  return (
    <ContentLayout
      breadcrumb={[
        { label: "Start Here", href: "/start-here" },
        { label: item.frontmatter.title, href: `/start-here/${slug}` },
      ]}
    >
      <AtlasHero
        title={item.frontmatter.title}
        description={item.frontmatter.description ?? ""}
        difficulty={item.frontmatter.difficulty}
        tags={item.frontmatter.tags}
        category="Start Here"
      />
      <MDXRemote source={item.content} components={mdxComponents} />
    </ContentLayout>
  );
}
