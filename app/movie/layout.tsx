import { SWRProvider } from "./swr-provider";

const MovieLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRProvider>
      <div className='p-6 flex min-h-fit w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex-col justify-center items-center bg-gray-600 '>
        {children}
      </div>
    </SWRProvider>
  );
};

export default MovieLayout;
