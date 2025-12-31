"use server";

import { createClient } from "../../lib/supabase/server";
import { redirect } from 'next/navigation'
import { headers } from 'next/headers';

export async function signUpNewUser(formData: FormData) {
  const supabase = await createClient();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const options = {
      emailRedirectTo: '/gallery',
  };

  const { data, error } = await supabase.auth.signUp({ email, password, options });

  if (error) {
    console.log('error');
    console.log({ error });
  } else {
    console.log('success');
    console.log({ data });
  }
}

export async function signInWithEmail(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const origin = headers().get('origin');
  const options = {
    redirectTo: `${origin}`
  };

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    console.log('error');
    console.log(error.code);
    console.log(error.name);
    console.log(error.message);
  } else {
    console.log('success');
    console.log({ data });
    console.log('url:', data.url);

    // redirect('/gallery');
  }
}
