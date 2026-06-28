import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassSliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  label?: string;
}

export function GlassSlider({
  glass = 'frosted',
  label,
  className,
  id,
  ...props
}: GlassSliderProps) {
  const sliderId = id || `glass-slider-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={cn('glass-slider-wrapper', className)}>
      {label && (
        <label htmlFor={sliderId} className="glass-slider-label">
          {label}
        </label>
      )}
      <input
        type="range"
        id={sliderId}
        className="glass-slider"
        data-glass={glass}
        {...props}
      />
    </div>
  );
}
