# Vercel Deployment Guide

## Prerequisites
- Vercel account (https://vercel.com)
- GitHub repository connected to Vercel
- Clerk Publishable Key

## Step 1: Connect Repository
1. Go to https://vercel.com/new
2. Select your GitHub repository
3. Choose the `Frontend` folder as the root directory

## Step 2: Set Environment Variables
In Vercel project settings, add these environment variables:

```
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
VITE_API_URL=https://zyvox-ai-backend.onrender.com/api || http://localhost:5000/api
```

## Step 3: Build Settings
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Step 4: Deploy
Click "Deploy" and wait for the deployment to complete.

## Troubleshooting

### Build Error: "Cannot find module"
- Ensure all imports use `.js` extensions for JavaScript files
- Check that all dependencies are in `package.json`

### "Clerk Publishable Key" Error
- Verify `VITE_CLERK_PUBLISHABLE_KEY` is set in Vercel environment variables
- The variable must start with `VITE_` for Vite to expose it

### API Connection Error
- Check that backend URL is accessible: `https://zyvox-ai-backend.onrender.com/api`
- Verify CORS is enabled on backend
- MongoDB connection must be working

### Blank Page After Deploy
- Check browser console for errors (F12)
- Verify all environment variables are set
- Check that Clerk is properly initialized

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| "import.meta.env undefined" | Ensure VITE_ prefix on env variables |
| MongoDB connection fails | Check MongoDB URI and IP whitelist |
| Clerk sign-in not working | Verify Clerk Publishable Key is correct |
| API calls timeout | Backend might be sleeping on free tier; wake it up |

## Production URL
Your app will be available at: `https://your-project-name.vercel.app`

## Redeploy
To redeploy after changes:
1. Push to main branch on GitHub
2. Vercel automatically triggers a new build
3. Check deployment status in Vercel dashboard

## Environment Variables Reference

| Variable | Purpose | Example |
|----------|---------|---------|
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk authentication | `pk_test_xxxxx` |
| `VITE_API_URL` | Backend API endpoint | `https://api.example.com/api` |

## Local Development
```bash
cd Frontend
npm install
npm run dev
```

Server runs at `http://localhost:5174`

## Production Build Test
```bash
npm run build
npm run preview
```

## Need Help?
- Check Vercel logs in project dashboard
- Verify all environment variables are set
- Ensure backend is running and accessible
- Check Clerk documentation: https://clerk.com/docs
