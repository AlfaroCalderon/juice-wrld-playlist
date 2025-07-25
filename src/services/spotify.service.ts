import { createSpotifyApi } from "@/api/spotify.api"
import { APIResponse } from "@/types/spotify.types";

export const spotify = async ():Promise<APIResponse> => {
    try {
        const spotifyAPI = await createSpotifyApi()
        const response = await spotifyAPI.get('albums/5BabrsTZzvGJQgrAfLMM18');
        return response.data;
    } catch (error) {
        throw new Error('An error has arisen: '+ error);
    }
    
}
