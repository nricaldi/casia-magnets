'use client';

import type { ChangeEvent, ReactNode } from 'react';
import styles from './input-group.module.css';

type InputGroupProps = {
  disabled?: boolean;
  icon?: ReactNode;
  label: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type: string;
  value?: string;
};

export default function InputGroup({
  disabled = false,
  required = false,
  icon,
  label,
  name,
  type,
  value,
  onChange
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
          disabled={disabled}
          name={name}
          required={required}
          type={type}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
