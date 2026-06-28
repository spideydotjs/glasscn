import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function GlassSidebar({
  glass = 'frosted',
  className,
  header,
  footer,
  children,
  ...props
}: GlassSidebarProps) {
  return (
    <aside
      className={cn('glass-sidebar', className)}
      data-glass={glass}
      {...props}
    >
      {header && <div className="glass-sidebar-header">{header}</div>}
      <div className="glass-sidebar-body">{children}</div>
      {footer && <div className="glass-sidebar-footer">{footer}</div>}
    </aside>
  );
}
