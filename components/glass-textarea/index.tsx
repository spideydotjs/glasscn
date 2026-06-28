import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  label?: string;
  error?: string;
}

export function GlassTextarea({
  glass = 'frosted',
  label,
  error,
  className,
  id,
  ...props
}: GlassTextareaProps) {
  const textareaId = id || `glass-textarea-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={cn('glass-textarea-wrapper', className)}>
      {label && (
        <label htmlFor={textareaId} className="glass-textarea-label">
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        className={cn('glass-textarea', error && 'glass-textarea-error')}
        data-glass={glass}
        {...props}
      />
      {error && <span className="glass-textarea-error-msg">{error}</span>}
    </div>
  );
}
