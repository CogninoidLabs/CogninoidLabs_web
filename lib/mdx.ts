import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface FrontMatter {
  title: string;
  description?: string;
  difficulty?: "beginner" | "intermediate" | "advanced";
  tags?: string[];
  order?: number;
  draft?: boolean;
  category?: string;
  nextSlug?: string;
  prevSlug?: string;
  [key: string]: unknown;
}

export interface ContentItem {
  slug: string;
  frontmatter: FrontMatter;
  content: string;
}

export function getSlugs(section: string): string[] {
  const dir = path.join(CONTENT_DIR, section);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getBySlug(section: string, slug: string): ContentItem | null {
  const filePath = path.join(CONTENT_DIR, section, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as FrontMatter,
    content,
  };
}

export function getAll(section: string): ContentItem[] {
  return getSlugs(section)
    .map((slug) => getBySlug(section, slug))
    .filter((item): item is ContentItem => item !== null)
    .filter((item) => !item.frontmatter.draft)
    .sort((a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99));
}
