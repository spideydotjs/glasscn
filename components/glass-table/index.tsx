import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassTableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  headers?: string[];
}

export function GlassTable({
  glass = 'frosted',
  headers = [],
  className,
  children,
  ...props
}: GlassTableProps) {
  return (
    <div className="glass-table-container" data-glass={glass}>
      <table className={cn('glass-table', className)} {...props}>
        {headers.length > 0 && (
          <thead>
            <tr className="glass-table-header-row">
              {headers.map((h, i) => (
                <th key={i} className="glass-table-header-cell">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody className="glass-table-body">{children}</tbody>
      </table>
    </div>
  );
}
