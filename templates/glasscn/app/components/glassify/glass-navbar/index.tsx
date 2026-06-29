import React from 'react';
import { cn } from '../../../lib/utils';

export interface GlassNavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  brand?: React.ReactNode;
  links?: React.ReactNode;
  actions?: React.ReactNode;
}

export function GlassNavbar({
  glass = 'frosted',
  className,
  brand,
  links,
  actions,
  children,
  ...props
}: GlassNavbarProps) {
  return (
    <header
      className={cn('glass-navbar', className)}
      data-glass={glass}
      {...props}
    >
      <div className="glass-navbar-inner">
        {brand && <div className="glass-navbar-brand">{brand}</div>}
        {links && <nav className="glass-navbar-links">{links}</nav>}
        {children && <div className="glass-navbar-custom">{children}</div>}
        {actions && <div className="glass-navbar-actions">{actions}</div>}
      </div>
    </header>
  );
}
