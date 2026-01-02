import Form from 'next/form';

import styles from '../auth.module.css';
import Button from '../../ui/common/button';
import { LuMail, LuLock } from "react-icons/lu";
import { signInWithEmail } from '../actions';

export default function SignInPage() {
  return (
    <section className={styles.authContainer}>

      <div className={styles.authFormWrapper}>
        <h1 className={styles.authTitle}>Welcome Back</h1>

        <Form action={signInWithEmail} className={styles.authForm}>
          <div>
            <label className={styles.authLabel}><LuMail /> Email:</label>
            <input className={styles.authInput} name="email" type="email" />
          </div>

          <div>
            <label className={styles.authLabel}><LuLock /> Password:</label>
            <input className={styles.authInput} name="password" type="password" />
          </div>

          <Button
            size="lg"
            variant="dark"
          >
            Sign In
          </Button>
        </Form>
      </div>
    </section>
  );
}
