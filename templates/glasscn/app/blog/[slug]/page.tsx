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
    <div className="relative min-h-screen flex flex-col font-sans overflow-x-hidden">
      {/* Background Mesh Gradients */}
      <div className="glass-mesh-bg">
        <div className="glass-mesh-orb w-[500px] h-[500px] bg-indigo-500/10 top-[-100px] left-[-100px]" />
        <div className="glass-mesh-orb w-[600px] h-[600px] bg-purple-500/10 bottom-[-100px] right-[-100px]" />
      </div>

      {/* Interactive Dot Grid Background from sonusid.in */}
      <DotGrid />

      <Navbar />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-16 relative z-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-indigo-500 mb-8 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to all posts
        </Link>

        <article className="flex flex-col gap-8">
          <GlassPanel
            glass="matte"
            title={post.title}
            description={post.excerpt}
            className="p-8 md:p-12 border border-white/5 flex flex-col gap-6 text-left"
          >
            <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 border-b border-white/10 pb-6 w-full">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>By {post.author}</span>
              </div>
            </div>

            <div className="w-full">
              <MarkdownRenderer content={post.content} />
            </div>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 w-full mt-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono border border-black/10 dark:border-white/10 px-2.5 py-0.5 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </GlassPanel>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 dark:border-white/[0.05] bg-white/20 dark:bg-black/20 backdrop-blur-md py-8 mt-16 relative z-10">
        <div className="max-w-3xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 glasscn. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-indigo-500 transition-colors">Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
