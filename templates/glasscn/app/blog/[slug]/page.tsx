import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { GlassPanel } from '../../components/glassify/glass-panel';
import DotGrid from '../../components/DotGrid';
import { getPostBySlug } from '../../lib/blog';
import { MarkdownRenderer } from '../../components/MarkdownRenderer';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="site-shell">
      <div className="glass-mesh-bg">
        <div className="glass-mesh-orb h-[520px] w-[520px] bg-indigo-500/10 left-[-140px] top-[-120px]" />
        <div className="glass-mesh-orb h-[540px] w-[540px] bg-purple-500/10 right-[-160px] bottom-[-160px]" />
      </div>
      <DotGrid className="hidden md:block" />

      <Navbar />

      <main className="site-main flex-1 !max-w-4xl">
        <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition-colors hover:text-indigo-500 dark:text-zinc-400">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to all posts
        </Link>

        <article>
          <GlassPanel
            glass="matte"
            title={post.title}
            description={post.excerpt}
            className="border border-black/10 p-6 text-left dark:border-white/10 md:p-10"
          >
            <div className="mb-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-black/10 pb-5 text-xs font-mono text-slate-500 dark:border-white/10 dark:text-zinc-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                <span>By {post.author}</span>
              </div>
            </div>

            <div className="w-full max-w-none">
              <MarkdownRenderer content={post.content} />
            </div>

            <div className="mt-8 flex flex-wrap gap-2 border-t border-black/10 pt-6 dark:border-white/10">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded border border-black/10 px-2.5 py-0.5 text-xs font-mono dark:border-white/10">
                  #{tag}
                </span>
              ))}
            </div>
          </GlassPanel>
        </article>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row dark:text-zinc-400">
          <p>© 2026 glasscn. Crafted for modern interfaces.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-indigo-500 transition-colors">Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
