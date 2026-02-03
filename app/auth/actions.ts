'use server';

import { headers } from 'next/headers';
import { createClient } from '../../lib/supabase/server';
import { redirect } from 'next/navigation';

export type AuthState = { email: string; password: string; confirm?: string; error?: string };

export async function signUpNewUser(state: AuthState, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirm = formData.get('confirm') as string;

  state = { email, password, confirm };

  if (password !== confirm) {
    state.error = 'Passwords do not match';
    return { ...state };
  }

  const supabase = await createClient();
  const origin = (await headers()).get('origin');
  const options = { emailRedirectTo: `${origin}/gallery` };

  const { data, error } = await supabase.auth.signUp({ email, password, options });

  if (error) {
    state.error = error.message;
    return { ...state };
  } else {
    console.log(data);
    return redirect(`/auth/verify?email=${encodeURIComponent(email)}`);
  }
}

export async function signInWithEmail(state: AuthState, formData: FormData) {
  const supabase = await createClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.log(error);
    console.log('Message: ' + error.message);

    state.error = error.message;

    return { ...state };
  } else {
    console.log('success');
    console.log({ data });

    redirect('/gallery');
  }
}
