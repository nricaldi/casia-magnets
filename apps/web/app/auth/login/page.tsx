
import Form from "next/Form";
import styles from "../auth.module.css";
import { signInWithEmail } from "../actions";

export default function LoginPage() {
  return (
    <section className={styles.authContainer}>

      <h1>Log In</h1>

      <Form action={signInWithEmail}>

        <div>
          <label>Email:</label>
          <input name="email" type="email" />
        </div>

        <div>
          <label>Password:</label>
          <input name="password" type="password" />
        </div>

        <button>Log Me In!</button>
      </Form>
    </section>
  );
}
