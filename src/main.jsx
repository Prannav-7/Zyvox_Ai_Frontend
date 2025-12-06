import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

// Import your Publishable Key with fallback - use hardcoded key for production
const PUBLISHABLE_KEY = 'pk_test_bW92ZWQtbW9uaXRvci04My5jbGVyay5hY2NvdW50cy5kZXYk';

console.log('🔑 Clerk Key Loaded:', PUBLISHABLE_KEY.substring(0, 20) + '...');
console.log('🔍 Environment:', import.meta.env.MODE || 'production');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>
  </StrictMode>,
);
