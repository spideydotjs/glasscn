import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassTooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  glass?: 'frosted' | 'liquid' | 'matte';
  content: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export function GlassTooltip({
  glass = 'frosted',
  content,
  position = 'top',
  className,
  children,
  ...props
}: GlassTooltipProps) {
  return (
    <div className={cn('glass-tooltip-wrapper', className)} {...props}>
      {children}
      <div
        className={cn('glass-tooltip-bubble', `glass-tooltip-${position}`)}
        data-glass={glass}
        role="tooltip"
      >
        {content}
      </div>
    </div>
  );
}
