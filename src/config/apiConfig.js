// API configuration for Frontend
// Use deployed backend in production, localhost in development

const isDevelopment = import.meta.env.MODE === 'development';
const envApiUrl = import.meta.env.VITE_API_URL;

// Parse environment variable if it contains || fallback
let apiUrl;
if (envApiUrl) {
  const urls = envApiUrl.split('||').map(url => url.trim());
  apiUrl = urls[0]; // Use first URL (production)
} else {
  apiUrl = isDevelopment 
    ? 'http://localhost:5000/api'
    : 'https://zyvox-ai-backend.onrender.com/api';
}

export const API_CONFIG = {
  // Production endpoint (deployed)
  PRODUCTION: 'https://zyvox-ai-backend.onrender.com/api',
  
  // Development endpoint (localhost)
  DEVELOPMENT: 'http://localhost:5000/api',
  
  // Current endpoint (with fallback logic)
  CURRENT: apiUrl
};

export const API_URL = API_CONFIG.CURRENT;

console.log('🔗 API Endpoint:', API_URL);

console.log(`🔗 API Endpoint: ${API_URL} (${isDevelopment ? 'Development' : 'Production'})`);
