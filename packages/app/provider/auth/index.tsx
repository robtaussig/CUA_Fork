import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from './cache';

//this should be the same as your next js frontend key
const CLERK_PUBLISHABLE_KEY = 'clerk.logical.pegasus-13.lcl.dev'; //enter your clerk key here!

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      frontendApi={CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      {children}
    </ClerkProvider>
  );
}
