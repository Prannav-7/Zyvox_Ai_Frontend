import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

// Import your Publishable Key with fallback
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 
                        process.env.VITE_CLERK_PUBLISHABLE_KEY ||
                        'pk_test_bW92ZWQtbW9uaXRvci04My5jbGVyay5hY2NvdW50cy5kZXYk';

console.log('🔑 Clerk Key Status:', PUBLISHABLE_KEY ? '✅ Loaded' : '❌ Missing');

if (!PUBLISHABLE_KEY) {
  console.error('❌ Error: Add VITE_CLERK_PUBLISHABLE_KEY to .env file');
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>,
);
