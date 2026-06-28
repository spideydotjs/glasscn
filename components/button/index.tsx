import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export function Button({ variant = 'default', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={`glassify-button ${variant} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}
