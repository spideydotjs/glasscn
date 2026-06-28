import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  label?: string;
}

export function GlassToggle({
  glass = 'frosted',
  label,
  className,
  id,
  ...props
}: GlassToggleProps) {
  const toggleId = id || `glass-toggle-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={cn('glass-toggle-wrapper', className)}>
      <label htmlFor={toggleId} className="glass-toggle-label">
        <input
          type="checkbox"
          id={toggleId}
          className="glass-toggle-input"
          data-glass={glass}
          {...props}
        />
        <span className="glass-toggle-track" data-glass={glass}>
          <span className="glass-toggle-thumb" data-glass={glass} />
        </span>
        {label && <span className="glass-toggle-text">{label}</span>}
      </label>
    </div>
  );
}
