import React from 'react';
import Link from 'next/link';
import { Calendar, User, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { GlassCard } from '../components/glassify/glass-card';
import { GlassPanel } from '../components/glassify/glass-panel';
import DotGrid from '../components/DotGrid';
import { getAllPosts } from '../lib/blog';

export default async function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="site-shell">
      <div className="glass-mesh-bg">
        <div className="glass-mesh-orb h-[560px] w-[560px] bg-indigo-500/10 right-[-180px] top-[-80px]" />
        <div className="glass-mesh-orb h-[460px] w-[460px] bg-purple-500/10 left-[-120px] bottom-[-120px]" />
      </div>
      <DotGrid className="hidden md:block" />

      <Navbar />

      <main className="site-main flex-1">
        <GlassPanel
          glass="matte"
          title={
            <span>
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                glasscn
              </span>{' '}
              Blog
            </span>
          }
          description="Tutorials, practical implementation guides, and release notes for building polished glass UI."
          className="mb-8 border border-black/10 p-6 dark:border-white/10 md:mb-10 md:p-8"
        >
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600 dark:text-zinc-300">
              Browse the latest updates and copy production-ready ideas into your own app.
            </p>
            <a
              href="https://glasscn.sonusid.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-indigo-500 hover:text-indigo-400"
            >
              Open playground
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </GlassPanel>

        {posts.length === 0 ? (
          <div className="rounded-xl border border-dashed border-black/15 bg-white/50 py-16 text-center text-sm text-slate-600 dark:border-white/15 dark:bg-black/20 dark:text-zinc-300">
            No blog posts found. Check back soon.
          </div>
        ) : (
          <div className="grid gap-5 md:gap-6">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                <GlassCard
                  glass="matte"
                  className="border border-black/10 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/40 dark:border-white/10 md:p-7"
                >
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h2 className="mt-3 text-xl font-bold tracking-tight transition-colors group-hover:text-indigo-500 md:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-4 dark:border-white/10">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span key={tag} className="rounded border border-black/10 px-2 py-0.5 text-[10px] font-mono dark:border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="flex items-center gap-0.5 text-xs font-semibold text-indigo-500 transition-transform group-hover:translate-x-1">
                      Read Article
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        )}
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
