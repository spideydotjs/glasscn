'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Sun, Moon, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { GlassNavbar } from './glassify/glass-navbar';
import { GlassButton } from './glassify/glass-button';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
  ];

  const linkClass = (href: string) =>
    `transition-colors ${pathname === href ? 'text-indigo-500' : 'hover:text-indigo-500'}`;

  return (
    <>
      <GlassNavbar
        glass="matte"
        className="sticky top-0 z-50 border-b border-black/5 bg-white/70 px-4 py-3 shadow-sm dark:border-white/10 dark:bg-black/30 md:px-8"
        brand={
          <Link href="/" className="group flex items-center gap-2 text-lg font-bold tracking-wide">
            <Sparkles className="h-5 w-5 text-indigo-500 transition-transform duration-300 group-hover:rotate-12" />
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              glasscn
            </span>
          </Link>
        }
        links={
          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/spideydotjs/glasscn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500"
            >
              GitHub
            </a>
          </div>
        }
        actions={
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="rounded-lg border border-black/10 p-2 transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-amber-500" />
                ) : (
                  <Moon className="h-4 w-4 text-indigo-600" />
                )}
              </button>
            )}
            <a
              href="https://glasscn.sonusid.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex"
            >
              <GlassButton
                glass="frosted"
                size="sm"
                variant="solid"
                className="inline-flex items-center gap-1.5"
              >
                Playground
                <ArrowUpRight className="h-3.5 w-3.5" />
              </GlassButton>
            </a>
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="rounded-lg border border-black/10 p-2 transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5 md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        }
      />

      {mobileOpen && (
        <div className="sticky top-[68px] z-40 border-b border-black/5 bg-white/90 px-4 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-[#05050ccc] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 ${pathname === item.href ? 'bg-indigo-500/10 text-indigo-500' : 'hover:bg-black/5 dark:hover:bg-white/5'}`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/spideydotjs/glasscn"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5"
            >
              GitHub
            </a>
            <a href="https://glasscn.sonusid.in" target="_blank" rel="noopener noreferrer" className="mt-1">
              <GlassButton glass="frosted" size="sm" variant="solid" className="w-full justify-center gap-1.5">
                Open Playground
                <ArrowUpRight className="h-3.5 w-3.5" />
              </GlassButton>
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
