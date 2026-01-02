import { ReactNode } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import styles from './button.module.css';

const sizeClasses = { lg: styles.sizeLg, sm: styles.sizeSm };

const variantClasses = { light: styles.variantLight, dark: styles.variantDark, accent: styles.variantAccent };

type ButtonProps = {
  as?: 'button' | 'link';
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  children: React.ReactNode;
  href?: string;
  icon?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ as = 'button', variant = 'light', size = 'lg', children, href, icon, onClick }: ButtonProps) {
  const classNames = clsx(styles.button, variantClasses[variant], sizeClasses[size]);

  if (as === 'link') {
    return (
      <Link href={href ?? '#'} className={classNames}>
        {children} {icon}
      </Link>
    );
  }

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}
