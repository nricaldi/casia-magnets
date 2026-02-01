'use client';

import type { FocusEventHandler, ReactNode } from 'react';
import styles from './input-group.module.css';

type InputGroupProps = {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  icon?: ReactNode;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

export default function InputGroup({
  disabled = false,
  required = false,
  name,
  label,
  type,
  icon,
  onBlur
}: InputGroupProps) {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>

      <div className={styles.inputWrapper}>
        <span className={styles.icon}>{icon}</span>
        <input
          className={styles.input}
          name={name}
          type={type}
          required={required}
          disabled={disabled}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
}
