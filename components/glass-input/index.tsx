import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  label?: string;
  error?: string;
}

export function GlassInput({
  glass = 'frosted',
  label,
  error,
  className,
  id,
  ...props
}: GlassInputProps) {
  const inputId = id || `glass-input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={cn('glass-input-wrapper', className)}>
      {label && (
        <label htmlFor={inputId} className="glass-input-label">
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={cn('glass-input', error && 'glass-input-error')}
        data-glass={glass}
        {...props}
      />
      {error && <span className="glass-input-error-msg">{error}</span>}
    </div>
  );
}
