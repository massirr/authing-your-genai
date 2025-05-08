import { getAccessTokenForConnection } from '@auth0/ai-langchain';

// Get the access token for a connection via Auth0
export const getAccessToken = async () => getAccessTokenForConnection();

// Connection for Google services
// Will be implemented later