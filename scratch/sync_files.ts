import fs from 'fs';
import path from 'path';
import { OCTOBER_POSTS } from './seed_october_posts';

const blogApiPath = path.resolve('api/blog.ts');
let blogApiContent = fs.readFileSync(blogApiPath, 'utf-8');

const postsFormatted = JSON.stringify(OCTOBER_POSTS, null, 2).slice(1, -1).trim();

// Insert at the beginning of SEED_BLOG_POSTS
if (!blogApiContent.includes('outubro-rosa-na-corretagem-planos-saude-prevencao')) {
  blogApiContent = blogApiContent.replace(
    'const SEED_BLOG_POSTS: BlogPostItem[] = [',
    `const SEED_BLOG_POSTS: BlogPostItem[] = [\n  ${postsFormatted},`
  );
  fs.writeFileSync(blogApiPath, blogApiContent, 'utf-8');
  console.log('Updated api/blog.ts with October posts!');
} else {
  console.log('api/blog.ts already has October posts');
}

// Update wpService.ts MOCK_BLOG_POSTS
const wpServicePath = path.resolve('src/services/wpService.ts');
let wpServiceContent = fs.readFileSync(wpServicePath, 'utf-8');

const wpMockFormatted = OCTOBER_POSTS.map(p => ({
  id: p.slug,
  title: p.title,
  slug: p.slug,
  excerpt: p.excerpt,
  content: p.content,
  date: p.date,
  featuredImage: p.imageUrl,
  category: p.category,
  tags: p.tags
}));
const wpFormattedStr = JSON.stringify(wpMockFormatted, null, 2).slice(1, -1).trim();

if (!wpServiceContent.includes('outubro-rosa-na-corretagem-planos-saude-prevencao')) {
  wpServiceContent = wpServiceContent.replace(
    'const MOCK_BLOG_POSTS: WPPost[] = [',
    `const MOCK_BLOG_POSTS: WPPost[] = [\n  ${wpFormattedStr},`
  );
  fs.writeFileSync(wpServicePath, wpServiceContent, 'utf-8');
  console.log('Updated src/services/wpService.ts with October posts!');
} else {
  console.log('src/services/wpService.ts already has October posts');
}
