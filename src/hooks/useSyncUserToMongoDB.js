import { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { saveUserToMongoDB } from '../utils/mongodbSync.js';

/**
 * Hook to automatically sync Clerk user data with MongoDB
 */
export function useSyncUserToMongoDB() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && user) {
      // Save user to MongoDB when they sign in
      saveUserToMongoDB(user);
    }
  }, [user, isLoaded]);

  return { user, isLoaded };
}
