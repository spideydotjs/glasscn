import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  value?: number; // 0 to 100
}

export function GlassProgress({
  glass = 'frosted',
  value = 0,
  className,
  ...props
}: GlassProgressProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      className={cn('glass-progress', className)}
      data-glass={glass}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      {...props}
    >
      <div
        className="glass-progress-fill"
        data-glass={glass}
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  );
}
