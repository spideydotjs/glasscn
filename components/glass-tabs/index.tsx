import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassTabItem {
  id: string;
  label: string;
}

export interface GlassTabsProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  items: GlassTabItem[];
  activeTab: string;
  onChangeTab?: (id: string) => void;
}

export function GlassTabs({
  glass = 'frosted',
  items,
  activeTab,
  onChangeTab,
  className,
  ...props
}: GlassTabsProps) {
  return (
    <div
      className={cn('glass-tabs-container', className)}
      data-glass={glass}
      {...props}
    >
      <div className="glass-tabs-list" role="tablist">
        {items.map((item) => {
          const isActive = item.id === activeTab;
          return (
            <button
              key={item.id}
              className={cn('glass-tabs-trigger', isActive && 'glass-tabs-trigger-active')}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChangeTab?.(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
