import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassCheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  label?: string;
}

export function GlassCheckbox({
  glass = 'frosted',
  label,
  className,
  id,
  ...props
}: GlassCheckboxProps) {
  const checkboxId = id || `glass-checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={cn('glass-checkbox-wrapper', className)}>
      <label htmlFor={checkboxId} className="glass-checkbox-label">
        <input
          type="checkbox"
          id={checkboxId}
          className="glass-checkbox-input"
          data-glass={glass}
          {...props}
        />
        <span className="glass-checkbox-box" data-glass={glass}>
          <svg
            className="glass-checkbox-checkmark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        {label && <span className="glass-checkbox-text">{label}</span>}
      </label>
    </div>
  );
}
