'use client';

import Form from 'next/form';
import Link from 'next/link';

import { useActionState } from 'react';

import styles from '../auth.module.css';
import Button from '../../ui/common/button';
import InputGroup from '../../ui/common/input-group';
import { LuMail, LuLock, LuCircleAlert } from 'react-icons/lu';
import { signInWithEmail, type AuthState } from '../actions';

const initialState: AuthState = { error: null };

export default function SignInPage() {
  const [state, formAction, isPending] = useActionState(signInWithEmail, initialState);

  return (
    <section className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1 className={styles.authTitle}>Welcome Back</h1>

        {state.error && (
          <div className={styles.authErrorCard}>
            <h4 className={styles.errorTitle}>
              <LuCircleAlert /> Unable to Sign In
            </h4>
            <p className={styles.errorMessage}>{state.error}</p>
          </div>
        )}

        <Form action={formAction} className={styles.authForm}>
          <InputGroup name="email" label="Email:" type="email" icon={<LuMail />} />

          <InputGroup name="password" label="Password:" type="password" icon={<LuLock />} />

          <Button size="lg" variant="dark" disabled={isPending} isLoading={isPending}>
            Sign In
          </Button>
        </Form>

        <div className={styles.authOptions}>
          <p className={styles.authOption}>
            Don&apos;t have an account?{' '}
            <Link href="/auth/sign-up" className={styles.authOptionLink}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
