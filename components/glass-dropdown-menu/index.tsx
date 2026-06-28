import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassDropdownMenuItem {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface GlassDropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  isOpen?: boolean;
  items: GlassDropdownMenuItem[];
  trigger: React.ReactNode;
}

export function GlassDropdownMenu({
  glass = 'frosted',
  isOpen = false,
  items,
  trigger,
  className,
  ...props
}: GlassDropdownMenuProps) {
  return (
    <div className={cn('glass-dropdown-wrapper', className)} {...props}>
      <div className="glass-dropdown-trigger">{trigger}</div>
      {isOpen && (
        <div className="glass-dropdown-menu" data-glass={glass} role="menu">
          {items.map((item, idx) => (
            <button
              key={idx}
              className="glass-dropdown-item"
              role="menuitem"
              disabled={item.disabled}
              onClick={item.onClick}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
