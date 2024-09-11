"use client";

const ErrorPage = ({ error, reset }) => {
  console.log(error);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="">
        <h2 className="text-4xl mb-5 text-red-500">{error.message}</h2>
        <div className="w-full flex justify-center items-center">
          <button
            className="btn btn-secondary text-center"
            onClick={() => reset()}
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
