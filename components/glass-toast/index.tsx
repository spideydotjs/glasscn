import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  glass?: 'frosted' | 'liquid' | 'matte';
  isOpen?: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  onClose?: () => void;
}

export function GlassToast({
  glass = 'frosted',
  isOpen = false,
  title,
  description,
  onClose,
  className,
  children,
  ...props
}: GlassToastProps) {
  if (!isOpen) return null;

  return (
    <div
      className={cn('glass-toast', className)}
      data-glass={glass}
      role="alert"
      {...props}
    >
      <div className="glass-toast-body">
        {title && <div className="glass-toast-title">{title}</div>}
        {description && <div className="glass-toast-description">{description}</div>}
        {children}
      </div>
      {onClose && (
        <button className="glass-toast-close-btn" onClick={onClose} aria-label="Close">
          &times;
        </button>
      )}
    </div>
  );
}
