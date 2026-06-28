import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassBreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  separator?: React.ReactNode;
}

export function GlassBreadcrumb({
  glass = 'frosted',
  separator = '/',
  className,
  children,
  ...props
}: GlassBreadcrumbProps) {
  const childrenArray = React.Children.toArray(children);

  return (
    <nav
      className={cn('glass-breadcrumb', className)}
      data-glass={glass}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol className="glass-breadcrumb-list">
        {childrenArray.map((child, index) => {
          const isLast = index === childrenArray.length - 1;
          return (
            <React.Fragment key={index}>
              <li className={cn('glass-breadcrumb-item', isLast && 'glass-breadcrumb-item-active')}>
                {child}
              </li>
              {!isLast && (
                <li className="glass-breadcrumb-separator" aria-hidden="true">
                  {separator}
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
