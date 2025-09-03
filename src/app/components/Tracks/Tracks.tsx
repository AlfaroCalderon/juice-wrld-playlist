import { APIResponse } from "@/types/spotify.types"
import Link from "next/link"
import Image from "next/image"
import { FaHeart } from "react-icons/fa";
import { useLikedTracks } from "@/stores/tracks.store";

//We get the props that are sent from the Album component
export const Tracks = ({ data }: { data: APIResponse }) => {

  const likedSongs = useLikedTracks((state) => state.likedTracks);
  const toggleTracks = useLikedTracks((state) => state.toggleTracks);

  return (
    <>
    <section className="mx-auto text-white" style={{background:"linear-gradient(0deg,rgba(0, 0, 0, 1) 0%, rgba(59, 48, 28, 1) 100%)"}}>
            {/*Here we create the table where we display the data */}
            <table className="w-full sm:w-3/4 border-collapse mx-auto">
              <thead className=" text-left">
                <tr className="border-b-1">
                  <th className="p-4">#</th>
                  <th className="p-4" colSpan={3}>
                    Title
                  </th>
                  <th className="p-4">Duration</th>
                </tr>
              </thead>
              <tbody>
                {/*We map the data that we get from the props and display it in the table */}
                {data?.tracks.items.map((song, idx) => (
                  <tr
                    key={song.id}
                    className="hover:bg-gray-800 transition-colors duration-200 rounded-md"
                  >
                    <td className="p-4">{idx + 1}</td>
                    <td className="p-4" colSpan={3}>
                      <div className="flex justify-between items-center">
                      <Link
                        href={song.external_urls.spotify}
                        className=" cursor-pointer"
                      >
                        {" "}
                        <Image src={data?.images?.[2]?.url} alt={data.artists[0].name} width={data?.images?.[2]?.width} height={data?.images?.[2]?.height} className="rounded-md  inline-block mr-1.5" priority/>
                        {" "}
                        {song.name}
                      </Link>
                      <span className="text-gray-400">{data.artists[0].name} <FaHeart color={likedSongs.includes(song.id) ? 'red' : 'grey'} onClick={() => toggleTracks(song.id)} className="inline-block ml-2 cursor-pointer" /></span>
                      </div>
                        
                    </td>
                    <td className="p-4">
                      {/*We convert the the milisecons in minutes and seconds for each song of the album xd*/}
                      {Math.floor(song.duration_ms / 60000)}:
                      {String(
                        Math.floor((song.duration_ms % 60000) / 1000)
                      ).padStart(2, "0")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/*I got this from Youtube*/}
          </section>
            <section className="mx-auto bg-gradient-to-br from-black via-gray-950 text-white p-8 flex flex-col items-center">
            <h2 className="text-4xl font-extrabold mb-6 text-yellow-400 drop-shadow-lg tracking-wide animate-pulse">
              Welcome to my abyss
            </h2>
            <div className="relative w-full flex justify-center mb-8">
              <div className="absolute  bg-yellow-950 opacity-20 blur-lg rounded-2xl"></div>
              <iframe
              width="560"
              height="315"
              className="rounded-2xl border-4 border-yellow-400 shadow-lg z-10"
              src="https://www.youtube.com/embed/tHDMJB2xZdc?si=Y5gmvgaeUo_BWXJ0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              ></iframe>
            </div>
            </section>
    </>
  )
}
