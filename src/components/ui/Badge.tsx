import React from 'react';

interface BadgeProps {
  variant?: 'primary' | 'qhse' | 'dark' | 'outline' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = ''
}) => {
  const variantStyles = {
    primary: 'bg-primary-100 text-primary-800 border-primary-300',
    qhse: 'bg-qhse-light text-qhse-800 border-qhse-100',
    dark: 'bg-dark text-white border-dark-border',
    outline: 'bg-white text-neutral-text border-neutral-border shadow-sm',
    warning: 'bg-amber-50 text-amber-900 border-amber-300'
  }[variant];

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-xs sm:text-sm px-3 py-1 gap-1.5 font-medium',
    lg: 'text-sm sm:text-base px-4 py-1.5 gap-2 font-semibold'
  }[size];

  return (
    <span className={`inline-flex items-center rounded-full border ${variantStyles} ${sizeStyles} ${className}`}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
