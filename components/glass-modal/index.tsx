import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  glass?: 'frosted' | 'liquid' | 'matte';
  isOpen?: boolean;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  onClose?: () => void;
}

export function GlassModal({
  glass = 'frosted',
  isOpen = false,
  title,
  footer,
  onClose,
  className,
  children,
  ...props
}: GlassModalProps) {
  if (!isOpen) return null;

  return (
    <div className="glass-modal-overlay" onClick={onClose}>
      <div
        className={cn('glass-modal-container', className)}
        data-glass={glass}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        <div className="glass-modal-header">
          {title && <h3 className="glass-modal-title">{title}</h3>}
          {onClose && (
            <button className="glass-modal-close-btn" onClick={onClose}>
              &times;
            </button>
          )}
        </div>
        <div className="glass-modal-content">{children}</div>
        {footer && <div className="glass-modal-footer">{footer}</div>}
      </div>
    </div>
  );
}
