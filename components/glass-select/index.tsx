import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassSelectOption {
  label: string;
  value: string;
}

export interface GlassSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  label?: string;
  error?: string;
  options?: GlassSelectOption[];
}

export function GlassSelect({
  glass = 'frosted',
  label,
  error,
  options = [],
  className,
  id,
  children,
  ...props
}: GlassSelectProps) {
  const selectId = id || `glass-select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={cn('glass-select-wrapper', className)}>
      {label && (
        <label htmlFor={selectId} className="glass-select-label">
          {label}
        </label>
      )}
      <div className="glass-select-container">
        <select
          id={selectId}
          className={cn('glass-select', error && 'glass-select-error')}
          data-glass={glass}
          {...props}
        >
          {children ||
            options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
        </select>
        <span className="glass-select-arrow" />
      </div>
      {error && <span className="glass-select-error-msg">{error}</span>}
    </div>
  );
}
