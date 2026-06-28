import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassCalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  selectedDate?: Date;
  onSelectDate?: (date: Date) => void;
}

export function GlassCalendar({
  glass = 'frosted',
  selectedDate,
  onSelectDate,
  className,
  ...props
}: GlassCalendarProps) {
  // Static visual shell for the calendar (30 days)
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div
      className={cn('glass-calendar', className)}
      data-glass={glass}
      {...props}
    >
      <div className="glass-calendar-header">
        <button className="glass-calendar-nav-btn">&lsaquo;</button>
        <span className="glass-calendar-month-year">June 2026</span>
        <button className="glass-calendar-nav-btn">&rsaquo;</button>
      </div>

      <div className="glass-calendar-grid">
        {weekdays.map((wd) => (
          <span key={wd} className="glass-calendar-weekday">
            {wd}
          </span>
        ))}
        {days.map((day) => {
          const isSelected = day === 15; // default highlight for mock
          return (
            <button
              key={day}
              className={cn(
                'glass-calendar-day',
                isSelected && 'glass-calendar-day-selected'
              )}
              onClick={() => onSelectDate?.(new Date(2026, 5, day))}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
