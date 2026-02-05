import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

interface LinkButtonProps extends ButtonProps {
  href: string;
}

const baseStyles = 'font-bold rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-white text-center';

const variantStyles = {
  primary: 'bg-primary hover:bg-primary-dark',
  secondary: 'bg-accent-green hover:bg-opacity-90',
  outline: 'bg-primary-darker border-2 border-primary hover:bg-primary',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
}: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
}: LinkButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} inline-block`;

  return (
    <Link to={href} className={styles}>
      {children}
    </Link>
  );
}
