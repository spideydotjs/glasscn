import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassAlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  glass?: 'frosted' | 'liquid' | 'matte';
  variant?: 'info' | 'warning' | 'error' | 'success';
  icon?: React.ReactNode;
  title?: React.ReactNode;
}

export function GlassAlert({
  glass = 'frosted',
  variant = 'info',
  icon,
  title,
  className,
  children,
  ...props
}: GlassAlertProps) {
  return (
    <div
      className={cn('glass-alert', `glass-alert-${variant}`, className)}
      data-glass={glass}
      role="alert"
      {...props}
    >
      {icon && <div className="glass-alert-icon">{icon}</div>}
      <div className="glass-alert-body">
        {title && <h5 className="glass-alert-title">{title}</h5>}
        <div className="glass-alert-content">{children}</div>
      </div>
    </div>
  );
}
