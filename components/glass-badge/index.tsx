import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  variant?: 'default' | 'secondary' | 'outline';
}

export function GlassBadge({
  glass = 'frosted',
  variant = 'default',
  className,
  children,
  ...props
}: GlassBadgeProps) {
  return (
    <span
      className={cn('glass-badge', `glass-badge-${variant}`, className)}
      data-glass={glass}
      {...props}
    >
      {children}
    </span>
  );
}
