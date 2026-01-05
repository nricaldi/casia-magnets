'use server';

import { headers } from 'next/headers';
import { createClient } from '../../lib/supabase/server';
import { redirect } from 'next/navigation';

export async function signUpNewUser(formData: FormData) {
  const supabase = await createClient();
  const origin = (await headers()).get('origin');

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const options = { emailRedirectTo: `${origin}/gallery` };

  const { data, error } = await supabase.auth.signUp({ email, password, options });

  if (error) {
    console.log('error');
    console.log({ error });
    console.error(error);
  } else {
    console.log(data);
    return redirect(`/auth/verify?email=${encodeURIComponent(email)}`);
  }
}

export async function signInWithEmail(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.log('error');
    console.log(error.code);
    console.log(error.name);
    console.log(error.message);
  } else {
    console.log('success');
    console.log({ data });

    redirect('/gallery');
  }
}
