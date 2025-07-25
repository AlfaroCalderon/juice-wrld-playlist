'use client'
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { Albums } from "./components/Albums/Albums";

export default function Home() {

  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Albums />
    </QueryClientProvider>
    </>
  );
}
