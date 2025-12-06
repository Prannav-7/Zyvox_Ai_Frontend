// Utility to sync Clerk user data with MongoDB backend

import { API_URL } from '../config/apiConfig.js';

/**
 * Save user data to MongoDB
 * @param {Object} user - Clerk user object
 */
export async function saveUserToMongoDB(user) {
  try {
    if (!user || !user.id) {
      console.log('No user to save');
      return;
    }

    const userData = {
      clerkId: user.id,
      email: user.emailAddresses?.[0]?.emailAddress || '',
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      profileImage: user.imageUrl || ''
    };

    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error(`Failed to save user: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ User saved to MongoDB:', data);
    return data;
  } catch (error) {
    console.error('❌ Error saving user to MongoDB:', error);
  }
}

/**
 * Get user data from MongoDB
 * @param {string} clerkId - Clerk user ID
 */
export async function getUserFromMongoDB(clerkId) {
  try {
    const response = await fetch(`${API_URL}/users/clerk/${clerkId}`);

    if (!response.ok) {
      throw new Error(`Failed to get user: ${response.statusText}`);
    }

    const user = await response.json();
    console.log('✅ User retrieved from MongoDB:', user);
    return user;
  } catch (error) {
    console.error('❌ Error getting user from MongoDB:', error);
  }
}

/**
 * Update user portfolio in MongoDB
 * @param {string} clerkId - Clerk user ID
 * @param {Object} portfolioData - Portfolio data to save
 */
export async function savePortfolioToMongoDB(clerkId, portfolioData) {
  try {
    const response = await fetch(`${API_URL}/portfolio/${clerkId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(portfolioData)
    });

    if (!response.ok) {
      throw new Error(`Failed to save portfolio: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ Portfolio saved to MongoDB:', data);
    return data;
  } catch (error) {
    console.error('❌ Error saving portfolio to MongoDB:', error);
  }
}

/**
 * Get user portfolio from MongoDB
 * @param {string} clerkId - Clerk user ID
 */
export async function getPortfolioFromMongoDB(clerkId) {
  try {
    const response = await fetch(`${API_URL}/portfolio/${clerkId}`);

    if (!response.ok) {
      throw new Error(`Failed to get portfolio: ${response.statusText}`);
    }

    const portfolio = await response.json();
    console.log('✅ Portfolio retrieved from MongoDB:', portfolio);
    return portfolio;
  } catch (error) {
    console.error('❌ Error getting portfolio from MongoDB:', error);
  }
}

/**
 * Add investment to user's portfolio
 * @param {string} clerkId - Clerk user ID
 * @param {Object} investmentData - Investment data
 */
export async function addInvestmentToMongoDB(clerkId, investmentData) {
  try {
    const response = await fetch(`${API_URL}/portfolio/${clerkId}/investment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(investmentData)
    });

    if (!response.ok) {
      throw new Error(`Failed to add investment: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('✅ Investment added to MongoDB:', data);
    return data;
  } catch (error) {
    console.error('❌ Error adding investment to MongoDB:', error);
  }
}

/**
 * Get user's investments from MongoDB
 * @param {string} clerkId - Clerk user ID
 */
export async function getInvestmentsFromMongoDB(clerkId) {
  try {
    const response = await fetch(`${API_URL}/portfolio/${clerkId}/investments`);

    if (!response.ok) {
      throw new Error(`Failed to get investments: ${response.statusText}`);
    }

    const investments = await response.json();
    console.log('✅ Investments retrieved from MongoDB:', investments);
    return investments;
  } catch (error) {
    console.error('❌ Error getting investments from MongoDB:', error);
  }
}
