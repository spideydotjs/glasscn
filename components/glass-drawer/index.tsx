import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassDrawerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  glass?: 'frosted' | 'liquid' | 'matte';
  position?: 'left' | 'right' | 'top' | 'bottom';
  isOpen?: boolean;
  title?: React.ReactNode;
}

export function GlassDrawer({
  glass = 'frosted',
  position = 'right',
  isOpen = false,
  title,
  className,
  children,
  ...props
}: GlassDrawerProps) {
  return (
    <div
      className={cn(
        'glass-drawer',
        `glass-drawer-${position}`,
        isOpen && 'glass-drawer-open',
        className
      )}
      data-glass={glass}
      {...props}
    >
      <div className="glass-drawer-header">
        {title && <h3 className="glass-drawer-title">{title}</h3>}
      </div>
      <div className="glass-drawer-content">{children}</div>
    </div>
  );
}
