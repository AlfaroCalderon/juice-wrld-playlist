import {create} from 'zustand';
import { persist } from 'zustand/middleware';

type ToggleTracks = {
    likedTracks: string[];
    toggleTracks: (id:string) => void;
}


export const  useLikedTracks = create( persist<ToggleTracks>((set) => ({
    likedTracks: [],
    toggleTracks: (id) => set((state) => ({
        likedTracks: state.likedTracks.includes(id)
            ? state.likedTracks.filter((like) => like !== id)
            : [...state.likedTracks, id]
    }))
}), { name: 'liked-storage' } ));

