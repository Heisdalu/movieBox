import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="mt-2 h-[500px] grid place-items-center">
      <div className="flex flex-col ">
        <h1 className="mb-1.5 text-18 font-bold">Something went wrong...</h1>
        <Link
          href="/"
          className="text-center text-white font-bold bg-rose px-2 py-0.5 rounded-6"
        >
          Go back
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
