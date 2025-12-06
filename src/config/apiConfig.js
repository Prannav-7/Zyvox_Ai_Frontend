// API configuration for Frontend
// Use deployed backend in production, localhost in development

const isDevelopment = import.meta.env.MODE === 'development';

export const API_CONFIG = {
  // Production endpoint (deployed)
  PRODUCTION: 'https://zyvox-ai-backend.onrender.com/api',
  
  // Development endpoint (localhost)
  DEVELOPMENT: 'http://localhost:5000/api',
  
  // Current endpoint (with fallback)
  CURRENT: isDevelopment 
    ? 'http://localhost:5000/api' || 'https://zyvox-ai-backend.onrender.com/api'
    : 'https://zyvox-ai-backend.onrender.com/api' || 'http://localhost:5000/api'
};

export const API_URL = API_CONFIG.CURRENT;

console.log(`🔗 API Endpoint: ${API_URL} (${isDevelopment ? 'Development' : 'Production'})`);
