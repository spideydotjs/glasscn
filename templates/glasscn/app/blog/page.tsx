import React from 'react';
import Link from 'next/link';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { GlassCard } from '../components/glassify/glass-card';
import { getAllPosts } from '../lib/blog';

export default async function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="relative min-h-screen flex flex-col font-sans">
      {/* Background Mesh Gradients */}
      <div className="glass-mesh-bg">
        <div className="glass-mesh-orb w-[600px] h-[600px] bg-indigo-500/10 top-[-100px] right-[-100px]" />
        <div className="glass-mesh-orb w-[500px] h-[500px] bg-purple-500/10 bottom-[-100px] left-[-100px]" />
      </div>

      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-16 relative z-10">
        <div className="text-left mb-12 flex flex-col gap-3">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            The{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              glasscn
            </span>{" "}
            Blog
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-zinc-400">
            Tutorials, guides, design specs, and release updates on glassmorphic layouts.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-md">
            <p className="text-slate-600 dark:text-zinc-400 text-sm">No blog posts found. Check back later!</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                <GlassCard
                  glass="frosted"
                  className="p-6 md:p-8 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 flex flex-col gap-4 text-left"
                >
                  <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-indigo-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-mono border border-black/10 dark:border-white/10 px-2.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-indigo-500 flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                      Read Article
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 dark:border-white/[0.05] bg-white/20 dark:bg-black/20 backdrop-blur-md py-8 mt-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
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
