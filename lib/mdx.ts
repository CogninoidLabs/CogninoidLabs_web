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
  subcategory?: string;
  nextSlug?: string;
  prevSlug?: string;
  [key: string]: unknown;
}

export interface ContentItem {
  slug: string;
  frontmatter: FrontMatter;
  content: string;
}

function getMdxFilesRecursive(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getMdxFilesRecursive(fullPath));
    } else if (entry.name.endsWith(".mdx") && !entry.name.startsWith("_")) {
      files.push(fullPath);
    }
  }
  return files;
}

function readMdxFile(filePath: string): ContentItem | null {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);
    const slug = path.basename(filePath, ".mdx");
    return { slug, frontmatter: data as FrontMatter, content };
  } catch {
    return null;
  }
}

export function getSlugs(section: string): string[] {
  const sectionDir = path.join(CONTENT_DIR, section);
  return getMdxFilesRecursive(sectionDir).map((f) => path.basename(f, ".mdx"));
}

export function getBySlug(section: string, slug: string): ContentItem | null {
  const sectionDir = path.join(CONTENT_DIR, section);
  // First try flat path (backward compat)
  const flatPath = path.join(sectionDir, `${slug}.mdx`);
  if (fs.existsSync(flatPath)) {
    return readMdxFile(flatPath);
  }
  // Then search recursively in subdirectories
  const files = getMdxFilesRecursive(sectionDir);
  const file = files.find((f) => path.basename(f, ".mdx") === slug);
  return file ? readMdxFile(file) : null;
}

export function getAll(section: string): ContentItem[] {
  const sectionDir = path.join(CONTENT_DIR, section);
  return getMdxFilesRecursive(sectionDir)
    .map(readMdxFile)
    .filter((item): item is ContentItem => item !== null && !item.frontmatter.draft)
    .sort((a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99));
}

export function getAllInCategory(section: string, subcategory: string): ContentItem[] {
  const categoryDir = path.join(CONTENT_DIR, section, subcategory);
  return getMdxFilesRecursive(categoryDir)
    .map(readMdxFile)
    .filter((item): item is ContentItem => item !== null && !item.frontmatter.draft)
    .sort((a, b) => (a.frontmatter.order ?? 99) - (b.frontmatter.order ?? 99));
}
