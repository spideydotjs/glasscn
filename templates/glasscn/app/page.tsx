import React from 'react';
import Link from 'next/link';
import { Sparkles, Terminal, Code2, Cpu, Flame, ChevronRight, BookOpen } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { GlassPanel } from './components/glassify/glass-panel';
import { GlassCard } from './components/glassify/glass-card';
import { GlassButton } from './components/glassify/glass-button';
import { getAllPosts } from './lib/blog';

export default async function Home() {
  const blogs = getAllPosts().slice(0, 2);

  return (
    <div className="relative min-h-screen flex flex-col font-sans">
      {/* Background Mesh Gradients */}
      <div className="glass-mesh-bg">
        <div className="glass-mesh-orb w-[500px] h-[500px] bg-indigo-500/10 top-[-100px] left-[-100px]" />
        <div className="glass-mesh-orb w-[600px] h-[600px] bg-purple-500/10 bottom-[-100px] right-[-100px]" />
        <div className="glass-mesh-orb w-[400px] h-[400px] bg-pink-500/5 top-[30%] left-[45%]" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-16 md:py-24 flex flex-col items-center gap-16 relative z-10">
        <div className="w-full text-center flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md text-xs font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Ready for Next.js 16 & React 19</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight">
            Build Stunning{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Glassmorphic
            </span>{" "}
            Interfaces
          </h1>
          
          <p className="max-w-2xl text-base md:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
            A premium glassmorphic React component library. Copy-paste gorgeous components with Frosted, Liquid, and Matte presets directly into your Next.js project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/blog">
              <GlassButton glass="liquid" variant="solid" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5">
                <BookOpen className="w-4 h-4" />
                Read the Blog
              </GlassButton>
            </Link>
            <a href="https://glasscn.sonusid.in" target="_blank" rel="noopener noreferrer">
              <GlassButton glass="frosted" variant="outline" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5">
                Explore Components
                <ChevronRight className="w-4 h-4" />
              </GlassButton>
            </a>
          </div>
        </div>

        {/* Live Glass Panel Showcase */}
        <div className="w-full max-w-5xl">
          <GlassPanel
            glass="frosted"
            title="Interactive Preview"
            description="Toggle design presets below to see glassmorphism refract in real-time."
            className="w-full border border-white/[0.05] dark:border-black/[0.1] shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="flex-1 flex flex-col gap-4 text-left">
              <h3 className="text-xl font-bold tracking-tight">Zero-Dependency Glass</h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                Every component is copy-pasted into your code directory. Adjust margins, override CSS variables, and customize every visual aspect directly in your own code editor.
              </p>
              <div className="flex gap-3 mt-2">
                <GlassButton glass="liquid" variant="solid" size="sm">Liquid Button</GlassButton>
                <GlassButton glass="matte" variant="outline" size="sm">Matte Button</GlassButton>
              </div>
            </div>
            <div className="w-full md:w-80 shrink-0">
              <GlassCard
                glass="liquid"
                header={<div className="font-bold text-sm tracking-wide uppercase">glass-card</div>}
                footer={
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[10px] font-mono text-zinc-500">v0.1.0</span>
                    <GlassButton glass="frosted" variant="solid" size="sm">Action</GlassButton>
                  </div>
                }
                className="w-full border border-white/10 p-6 flex flex-col gap-4 text-left"
              >
                <h4 className="text-base font-semibold">Crystal Clear</h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  Liquid glass utilizes low blur and saturation overlays to maximize transparency and light.
                </p>
              </GlassCard>
            </div>
          </GlassPanel>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          <GlassCard glass="liquid" className="p-8 border border-white/5 flex flex-col gap-4 text-left">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-500 shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold tracking-tight">Developer CLI</h3>
            <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
              Initialize layout configs and download component code seamlessly using `npx glasscn add [component]`.
            </p>
          </GlassCard>

          <GlassCard glass="liquid" className="p-8 border border-white/5 flex flex-col gap-4 text-left">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold tracking-tight">Tailwind v4 & CSS</h3>
            <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
              Uses modern CSS custom properties and tokens, easily compiling with the latest Tailwind v4 engine.
            </p>
          </GlassCard>

          <GlassCard glass="liquid" className="p-8 border border-white/5 flex flex-col gap-4 text-left">
            <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold tracking-tight">Pixel Perfect</h3>
            <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
              Designed with precision border grids, subtle saturation overlays, and responsive animations.
            </p>
          </GlassCard>
        </div>

        {/* Blog section */}
        {blogs.length > 0 && (
          <div className="w-full max-w-5xl flex flex-col gap-8">
            <div className="flex justify-between items-end border-b border-white/10 pb-4">
              <div className="text-left">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Latest from the Blog</h2>
                <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">Tutorials and updates on building with glasscn.</p>
              </div>
              <Link href="/blog" className="text-xs font-medium text-indigo-500 hover:text-indigo-400 transition-colors flex items-center gap-1">
                View all blogs
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <Link href={`/blog/${blog.slug}`} key={blog.slug}>
                  <GlassCard glass="frosted" className="p-6 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 flex flex-col gap-3 text-left group">
                    <span className="text-[10px] font-mono text-zinc-500">{blog.date}</span>
                    <h3 className="text-lg font-bold tracking-tight group-hover:text-indigo-500 transition-colors">{blog.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">{blog.excerpt}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {blog.tags.map((tag) => (
                        <span key={tag} className="text-[9px] font-mono border border-black/10 dark:border-white/10 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 dark:border-white/[0.05] bg-white/20 dark:bg-black/20 backdrop-blur-md py-8 mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
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
