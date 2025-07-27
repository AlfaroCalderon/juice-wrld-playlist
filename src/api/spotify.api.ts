import axios from "axios";

const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;      
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET; 

// Encode client ID and secret in base64
const authHeader = Buffer.from(`${client_id}:${client_secret}`).toString('base64');


// I created a async funtion that uses and enpoint to get the access token from Spotify API
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
    console.log('Access Token:', accessToken); //Basically, you need to have a user in spotify to get your client ID and secret, then you send that data to the endpoint and it returns an access token.
    return accessToken;

  } catch (error) {
    console.error('Error getting token:', error);
  }
}

//What I did is that I created this async function that returns an axios instance with the access token in the header, so every time I call the function it will generate a new access token, each token last 1 hour.
export async function createSpotifyApi() {
  const accessToken = await getAccessToken();
  return axios.create({
    baseURL: "https://api.spotify.com/v1/",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
}