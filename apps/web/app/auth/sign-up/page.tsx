import Form from 'next/form';

import styles from '../auth.module.css';
import Button from '../../ui/common/button';
import { LuMail, LuLock } from 'react-icons/lu';
import Link from 'next/link';
import { signUpNewUser } from '../actions';

export default function SignUpPage() {
  return (
    <section className={styles.authContainer}>
      <div className={styles.authCard}>
        <h1 className={styles.authTitle}>Create Your Account</h1>

        <Form action={signUpNewUser} className={styles.authForm}>
          <div>
            <label className={styles.authLabel} htmlFor="email">
              <LuMail /> Email:
            </label>
            <input className={styles.authInput} name="email" type="email" />
          </div>

          <div>
            <label className={styles.authLabel} htmlFor="password">
              <LuLock /> Password:
            </label>
            <input className={styles.authInput} name="password" type="password" />
          </div>

          <div>
            <label className={styles.authLabel} htmlFor="confirm">
              <LuLock /> Confirm password:
            </label>
            <input className={styles.authInput} name="password" type="password" />
          </div>

          <Button size="lg" variant="dark">
            Sign Up
          </Button>
        </Form>

        <div className={styles.authOptions}>
          <p className={styles.authOption}>
            Already have an account?{' '}
            <Link href="/auth/sign-in" className={styles.authOptionLink}>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
