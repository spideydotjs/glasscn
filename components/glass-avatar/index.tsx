import React from 'react';
import { cn } from '../../lib/utils.js';

export interface GlassAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: 'frosted' | 'liquid' | 'matte';
  src?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function GlassAvatar({
  glass = 'frosted',
  src,
  fallback,
  size = 'md',
  className,
  ...props
}: GlassAvatarProps) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div
      className={cn('glass-avatar', `glass-avatar-${size}`, className)}
      data-glass={glass}
      {...props}
    >
      {src && !hasError ? (
        <img
          src={src}
          alt={fallback || 'User Avatar'}
          className="glass-avatar-image"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="glass-avatar-fallback">{fallback}</div>
      )}
    </div>
  );
}
