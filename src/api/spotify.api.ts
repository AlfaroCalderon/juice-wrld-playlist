import axios from "axios";

const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;      // Replace with your client ID
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET; // Replace with your client secret

// Encode client ID and secret in base64
const authHeader = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

async function getAccessToken() {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}`, new URLSearchParams({
      grant_type: 'client_credentials'
    }), {
      headers: {
        'Authorization': `Basic ${authHeader}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const accessToken = response.data.access_token;
    console.log('Access Token:', accessToken);
    return accessToken;

  } catch (error) {
    console.error('Error getting token:', error);
  }
}


export async function createSpotifyApi() {
  const accessToken = await getAccessToken();
  return axios.create({
    baseURL: "https://api.spotify.com/v1/",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
}