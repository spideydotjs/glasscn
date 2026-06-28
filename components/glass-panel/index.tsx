import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassPanelProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  glass?: 'frosted' | 'liquid' | 'matte';
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export function GlassPanel({
  glass = 'frosted',
  className,
  title,
  description,
  children,
  ...props
}: GlassPanelProps) {
  return (
    <div
      className={cn('glass-panel', className)}
      data-glass={glass}
      {...props}
    >
      {(title || description) && (
        <div className="glass-panel-header">
          {title && <h2 className="glass-panel-title">{title}</h2>}
          {description && <p className="glass-panel-description">{description}</p>}
        </div>
      )}
      <div className="glass-panel-body">{children}</div>
    </div>
  );
}
