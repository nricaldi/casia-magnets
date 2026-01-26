'use client';

import type { ChangeEventHandler, ReactNode } from 'react';
import styles from './input-group.module.css';

type InputGroupProps = {
  name: string;
  label: string;
  type: string;
  icon?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

export default function InputGroup({
  disabled = false,
  name,
  label,
  type,
  icon,
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
          name={name}
          type={type}
          disabled={disabled}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
