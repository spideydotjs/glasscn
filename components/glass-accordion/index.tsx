import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassAccordionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  glass?: 'frosted' | 'liquid' | 'matte';
  title: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function GlassAccordion({
  glass = 'frosted',
  title,
  isOpen = false,
  onToggle,
  className,
  children,
  ...props
}: GlassAccordionProps) {
  return (
    <div
      className={cn('glass-accordion', isOpen && 'glass-accordion-open', className)}
      data-glass={glass}
      {...props}
    >
      <button
        className="glass-accordion-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="glass-accordion-title">{title}</span>
        <span className="glass-accordion-icon" />
      </button>
      <div className="glass-accordion-content-wrapper">
        <div className="glass-accordion-content">{children}</div>
      </div>
    </div>
  );
}
