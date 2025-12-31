
import Form from "next/Form";
import styles from "../auth.module.css";
import { signUpNewUser } from "../actions";

export default function SignUpPage() {
  return (
    <section className={styles.authContainer}>

      <h1>Sign Up</h1>

      <Form action={signUpNewUser}>

        <div>
          <label>Email:</label>
          <input name="email" type="email" />
        </div>

        <div>
          <label>Password:</label>
          <input name="password" type="password" />
        </div>

        <button>Sign Me Up!</button>
      </Form>
    </section>
  );
}
