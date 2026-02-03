'use server';

import { headers } from 'next/headers';
import { createClient } from '../../lib/supabase/server';
import { redirect } from 'next/navigation';

export type AuthState = { error?: string };

export async function signUpNewUser(_state: AuthState, formData: FormData) {
  const email = String(formData.get('email') ?? '');
  const password = String(formData.get('password') ?? '');
  const confirm = String(formData.get('confirm') ?? '');

  if (password !== confirm) {
    return { error: 'Passwords do not match' };
  }

  const supabase = await createClient();
  const origin = (await headers()).get('origin');
  const options = { emailRedirectTo: `${origin}/gallery` }; // TODO - validate emailRedirectTo

  const { error } = await supabase.auth.signUp({ email, password, options });

  if (error) {
    return { error: error.message };
  }

  redirect(`/auth/verify?email=${encodeURIComponent(email)}`);
}

export async function signInWithEmail(_state: AuthState, formData: FormData) {
  const email = String(formData.get('email') ?? '');
  const password = String(formData.get('password') ?? '');

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.log(error);
    console.log('Message: ' + error.message);

    return { error: error.message };
  }

  console.log('success');
  console.log({ data });

  redirect('/gallery');
}
