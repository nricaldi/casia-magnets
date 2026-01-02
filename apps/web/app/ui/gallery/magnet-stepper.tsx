'use client';

import styles from './magnet.module.css';
import Button from '../common/button';
import { LuMinus, LuPlus } from 'react-icons/lu';

type MagnetStepperProps = { quantity: number; onIncrement: () => void; onDecrement: () => void };

export default function MagnetStepper({ quantity, onIncrement, onDecrement }: MagnetStepperProps) {
  return (
    <div className={styles.inputWrapper}>
      <Button variant="dark" size="sm" onClick={onDecrement}>
        <LuMinus />
      </Button>
      <span className={styles.quantity}>{quantity}</span>
      <Button variant="dark" size="sm" onClick={onIncrement}>
        <LuPlus />
      </Button>
    </div>
  );
}
