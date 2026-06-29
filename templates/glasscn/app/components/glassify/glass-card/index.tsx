import React from 'react';
import { cn } from '../../../lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function GlassCard({
  glass = 'frosted',
  className,
  header,
  footer,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn('glass-card', className)}
      data-glass={glass}
      {...props}
    >
      {header && <div className="glass-card-header">{header}</div>}
      <div className="glass-card-content">{children}</div>
      {footer && <div className="glass-card-footer">{footer}</div>}
    </div>
  );
}
