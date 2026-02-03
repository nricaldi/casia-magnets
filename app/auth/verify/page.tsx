import styles from '../auth.module.css';
import Button from '../../ui/common/button';
import { redirect } from 'next/navigation';

type VerifyPageProps = { searchParams: Promise<{ email?: string }> };

export default async function VerifyPage({ searchParams }: VerifyPageProps) {
  const { email } = await searchParams;

  if (!email) redirect('/auth/sign-up');

  return (
    <section className={styles.authContainer}>
      <div className={`${styles.authCard} ${styles.wide}`}>
        <h1 className={styles.authTitle}>Please verify your account</h1>

        <div className={styles.authTextGroup}>
          <p className={styles.authText}>You&apos;re almost there! We sent an email to:</p>
          <strong>{email}</strong>
        </div>

        <div className={styles.authTextGroup}>
          <p className={styles.authText}>
            Just click on the link in the email to complete your sign up. If you don&apos;t see it,
            you may need to <strong>check your spam</strong> folder.
          </p>
        </div>

        <div className={styles.authTextGroup}>
          <p className={styles.authText}>Still can&apos;t find it?</p>
        </div>

        <Button size="lg" variant="dark">
          Resend
        </Button>
      </div>
    </section>
  );
}
