import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

// Import your Publishable Key with multiple fallback options
const PUBLISHABLE_KEY = 
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 
  process.env.VITE_CLERK_PUBLISHABLE_KEY ||
  'pk_test_bW92ZWQtbW9uaXRvci04My5jbGVyay5hY2NvdW50cy5kZXYk';

console.log('🔑 Clerk Key Status:', PUBLISHABLE_KEY ? '✅ Loaded' : '❌ Missing');
console.log('🔍 Environment:', import.meta.env.MODE);

if (!PUBLISHABLE_KEY || PUBLISHABLE_KEY === 'undefined') {
  console.error('❌ Critical Error: VITE_CLERK_PUBLISHABLE_KEY is not set');
  console.error('Please add environment variables in Vercel Dashboard:');
  console.error('VITE_CLERK_PUBLISHABLE_KEY = pk_test_bW92ZWQtbW9uaXRvci04My5jbGVyay5hY2NvdW50cy5kZXYk');
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>,
);
