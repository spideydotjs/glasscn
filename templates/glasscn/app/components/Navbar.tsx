'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { GlassNavbar } from './glassify/glass-navbar';
import { GlassButton } from './glassify/glass-button';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <GlassNavbar
      glass="matte"
      className="sticky top-0 z-50 px-4 md:px-8 py-3 border-b border-white/[0.05] dark:border-black/[0.1]"
      brand={
        <Link href="/" className="flex items-center gap-2 font-bold tracking-wider text-xl group">
          <Sparkles className="w-5 h-5 text-indigo-500 group-hover:rotate-12 transition-transform duration-300" />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            glasscn
          </span>
        </Link>
      }
      links={
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-indigo-500 transition-colors">Blog</Link>
          <a href="https://github.com/spideydotjs/glasscn" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">GitHub</a>
        </div>
      }
      actions={
        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
          )}
          <GlassButton glass="frosted" size="sm" variant="solid" onClick={() => window.open('https://glasscn.sonusid.in', '_blank')}>
            Explorer
          </GlassButton>
        </div>
      }
    />
  );
}
