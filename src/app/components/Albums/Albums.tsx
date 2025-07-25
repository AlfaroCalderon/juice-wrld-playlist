import { spotify } from "@/services/spotify.service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Tracks } from "../Tracks/Tracks";

export const Albums = () => {
  const { data, isError, isPending, isSuccess, error } = useQuery({
    queryKey: ["albums"],
    queryFn: () => spotify(),
  });
  console.log(data);
  const releaseYear = data?.release_date
    ? new Date(data.release_date).getFullYear()
    : "";
  let albumDuration = 0;
  data?.tracks.items.map((song) => {
    albumDuration = albumDuration + song.duration_ms;
  });
  const hours = Math.floor(albumDuration / 3600000);
  const minutes = Math.floor((albumDuration % 3600000) / 60000);
  return (
    <>
      {isError && (
        <div className="text-red-500 text-center">
          <p>Error: {error!.message}</p>
        </div>
      )}

      {isPending && (
        <div className="text-yellow-500 text-center mt-8">
          <div className="flex justify-center items-center">
            <svg
              className="animate-spin h-6 w-6 text-yellow-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            <p>Loading...</p>
          </div>
        </div>
      )}

      {isSuccess && data && (
        <div className="w-full">
          <section
            style={{
              background:
                "linear-gradient(0deg, rgba(38, 29, 5, 1) 0%, rgba(255, 201, 84, 1) 100%)",
            }}
            className=" mx-auto flex justify-items-start flex-col sm:flex-row"
          >
            <div className=" flex justify-center items-center p-5">
              <Image
                className=" rounded-2xl shadow-2xl"
                src={data?.images?.[1]?.url || "/placeholder.png"}
                width={data?.images?.[1]?.width || 100}
                height={data?.images?.[1]?.height || 100}
                alt=""
                priority
              />
            </div>
            <div className=" text-white flex flex-col justify-end p-5">
              <p>
                <strong>Album</strong>
              </p>
              <h1 className="text-4xl font-bold">{data?.name}</h1>
              <p className="text-2xl flex items-center gap-2">
                {data?.images?.[1]?.url && (
                  <Image
                    src={data?.images?.[2]?.url}
                    alt={data.artists[0].name}
                    width={32}
                    height={32}
                    className="rounded-full"
                    priority
                  />
                )}
                <strong>{`${data?.artists[0].name} . ${releaseYear} . ${data?.total_tracks} songs, ${hours} hr ${minutes} min`}</strong>
              </p>
            </div>
          </section>
          <Tracks data={data} />
        </div>
      )}
    </>
  );
};
