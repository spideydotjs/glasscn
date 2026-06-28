import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassPaginationProps extends React.HTMLAttributes<HTMLElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function GlassPagination({
  glass = 'frosted',
  currentPage,
  totalPages,
  onPageChange,
  className,
  ...props
}: GlassPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className={cn('glass-pagination', className)}
      data-glass={glass}
      aria-label="Pagination Navigation"
      {...props}
    >
      <button
        className="glass-pagination-btn"
        disabled={currentPage <= 1}
        onClick={() => onPageChange?.(currentPage - 1)}
        aria-label="Previous Page"
      >
        &lsaquo;
      </button>

      {pages.map((page) => {
        const isCurrent = page === currentPage;
        return (
          <button
            key={page}
            className={cn('glass-pagination-btn', isCurrent && 'glass-pagination-btn-active')}
            onClick={() => onPageChange?.(page)}
            aria-current={isCurrent ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}

      <button
        className="glass-pagination-btn"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
        aria-label="Next Page"
      >
        &rsaquo;
      </button>
    </nav>
  );
}
