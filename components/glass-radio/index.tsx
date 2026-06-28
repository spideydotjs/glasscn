import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassRadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  label?: string;
}

export function GlassRadio({
  glass = 'frosted',
  label,
  className,
  id,
  ...props
}: GlassRadioProps) {
  const radioId = id || `glass-radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={cn('glass-radio-wrapper', className)}>
      <label htmlFor={radioId} className="glass-radio-label">
        <input
          type="radio"
          id={radioId}
          className="glass-radio-input"
          data-glass={glass}
          {...props}
        />
        <span className="glass-radio-circle" data-glass={glass}>
          <span className="glass-radio-dot" />
        </span>
        {label && <span className="glass-radio-text">{label}</span>}
      </label>
    </div>
  );
}
