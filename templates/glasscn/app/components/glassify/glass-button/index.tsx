import React from 'react';
import { cn } from '../../../lib/utils';

export interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function GlassButton({
  glass = 'frosted',
  variant = 'solid',
  size = 'md',
  className,
  children,
  ...props
}: GlassButtonProps) {
  return (
    <button
      className={cn(
        'glass-button',
        `glass-button-${variant}`,
        `glass-button-${size}`,
        className
      )}
      data-glass={glass}
      {...props}
    >
      <span className="glass-button-content">{children}</span>
    </button>
  );
}
