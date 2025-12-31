'use client';

import { createClient } from '../../lib/supabase/client';
import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';

const UserContext = createContext<User | null>(null);

export function UserProvider ({ children, initialUser }: { children: React.ReactNode, initialUser: User | null }) {

  const supabase = createClient();
  const [user, setUser] = useState<User | null>(initialUser);

  useEffect(() => {
    setUser(initialUser);

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        setUser(null);
      }
    })

    return () => {
      data.subscription.unsubscribe()
    }
  }, [initialUser]);

  return (
    <UserContext value={user}>
      {children}
    </UserContext>
  );
};

export function useUser () {
  return useContext(UserContext);
};
