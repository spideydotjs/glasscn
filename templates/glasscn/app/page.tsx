import React from 'react';
import Link from 'next/link';
import { Sparkles, Terminal, Code2, Cpu, ChevronRight, BookOpen, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { GlassPanel } from './components/glassify/glass-panel';
import { GlassCard } from './components/glassify/glass-card';
import { GlassButton } from './components/glassify/glass-button';
import DotGrid from './components/DotGrid';
import { getAllPosts } from './lib/blog';

export default async function Home() {
  const blogs = getAllPosts().slice(0, 2);

  return (
    <div className="site-shell">
      <div className="glass-mesh-bg">
        <div className="glass-mesh-orb h-[460px] w-[460px] bg-indigo-500/10 left-[-120px] top-[-120px]" />
        <div className="glass-mesh-orb h-[540px] w-[540px] bg-purple-500/10 right-[-180px] top-[12%]" />
        <div className="glass-mesh-orb h-[420px] w-[420px] bg-pink-500/10 bottom-[-140px] left-[36%]" />
      </div>
      <DotGrid className="hidden md:block" />

      <Navbar />

      <main className="site-main flex-1 space-y-16 md:space-y-20">
        <section className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <GlassPanel
            glass="matte"
            className="border border-black/10 p-6 shadow-xl dark:border-white/10 md:p-10"
          >
            <div className="flex flex-col gap-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/50 px-3 py-1 text-xs font-medium tracking-wide dark:border-white/10 dark:bg-black/40">
                <Sparkles className="h-3.5 w-3.5 text-indigo-500" />
                Ready for Next.js 16 & React 19
              </div>

              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                  Professional
                  <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"> glassmorphic </span>
                  UI for production apps
                </h1>
                <p className="max-w-2xl text-sm text-slate-600 dark:text-zinc-300 md:text-base">
                  glasscn gives you polished React components that stay readable, responsive, and consistent across light and dark themes.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="https://glasscn.sonusid.in" target="_blank" rel="noopener noreferrer">
                  <GlassButton glass="matte" variant="solid" className="w-full gap-2 px-7 py-3 sm:w-auto">
                    Open Playground
                    <ArrowUpRight className="h-4 w-4" />
                  </GlassButton>
                </a>
                <Link href="/blog">
                  <GlassButton glass="matte" variant="outline" className="w-full gap-2 px-7 py-3 sm:w-auto">
                    Read Documentation
                    <BookOpen className="h-4 w-4" />
                  </GlassButton>
                </Link>
              </div>
            </div>
          </GlassPanel>

          <GlassCard
            glass="matte"
            className="border border-black/10 p-6 shadow-lg dark:border-white/10 md:p-8"
            header={<div className="text-sm font-semibold uppercase tracking-[0.08em] text-slate-500 dark:text-zinc-400">Why teams choose glasscn</div>}
          >
            <div className="space-y-4 text-sm text-slate-600 dark:text-zinc-300">
              {[
                'Copy-paste ownership with no runtime dependency lock-in',
                'Consistent tokens across frosted, liquid, and matte styles',
                'Responsive defaults that scale from mobile to desktop',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-black/10 pt-5 dark:border-white/10">
              <div>
                <p className="text-2xl font-bold">27+</p>
                <p className="text-xs text-slate-500 dark:text-zinc-400">Components</p>
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-xs text-slate-500 dark:text-zinc-400">Glass presets</p>
              </div>
              <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-xs text-slate-500 dark:text-zinc-400">Runtime deps</p>
              </div>
            </div>
          </GlassCard>
        </section>

        <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              icon: <Terminal className="h-5 w-5" />,
              title: 'Developer CLI',
              description: 'Bootstrap config and add source components with one command.',
              tone: 'text-indigo-500 bg-indigo-500/10',
            },
            {
              icon: <Code2 className="h-5 w-5" />,
              title: 'Modern CSS Tokens',
              description: 'Designed for Tailwind v4 and CSS variable driven theming.',
              tone: 'text-purple-500 bg-purple-500/10',
            },
            {
              icon: <Cpu className="h-5 w-5" />,
              title: 'Production-grade UX',
              description: 'High-contrast styles, clear hierarchy, and responsive spacing.',
              tone: 'text-pink-500 bg-pink-500/10',
            },
          ].map((feature) => (
            <GlassCard key={feature.title} glass="matte" className="border border-black/10 p-7 dark:border-white/10">
              <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${feature.tone}`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold tracking-tight">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-zinc-300">{feature.description}</p>
            </GlassCard>
          ))}
        </section>

        <section>
          <GlassPanel
            glass="matte"
            title="Get from idea to interface faster"
            description="Start with the template, swap presets, and ship production-ready UI with full code ownership."
            className="border border-black/10 p-6 shadow-lg dark:border-white/10 md:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm text-slate-600 dark:text-zinc-300">
                Use the playground to explore composition patterns and transfer polished sections directly into your app.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="https://glasscn.sonusid.in" target="_blank" rel="noopener noreferrer">
                  <GlassButton glass="matte" variant="solid" className="w-full gap-2 sm:w-auto">
                    Explore Components
                    <ChevronRight className="h-4 w-4" />
                  </GlassButton>
                </a>
                <Link href="/blog">
                  <GlassButton glass="matte" variant="outline" className="w-full sm:w-auto">
                    Read Blog
                  </GlassButton>
                </Link>
              </div>
            </div>
          </GlassPanel>
        </section>

        {blogs.length > 0 && (
          <section className="space-y-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Latest from the blog</h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-zinc-300">
                  Tutorials, launch notes, and practical integration guides.
                </p>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-medium text-indigo-500 hover:text-indigo-400">
                View all posts
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {blogs.map((blog) => (
                <Link href={`/blog/${blog.slug}`} key={blog.slug} className="group">
                  <GlassCard
                    glass="matte"
                    className="h-full border border-black/10 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/40 dark:border-white/10"
                  >
                    <p className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">{blog.date}</p>
                    <h3 className="mt-3 text-lg font-bold tracking-tight transition-colors group-hover:text-indigo-500">
                      {blog.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-zinc-300">{blog.excerpt}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="rounded border border-black/10 px-2 py-0.5 text-[10px] font-mono dark:border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row dark:text-zinc-400">
          <p>© 2026 glasscn. Crafted for modern interfaces.</p>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-indigo-500 transition-colors">Blog</Link>
            <a href="https://github.com/spideydotjs/glasscn" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
