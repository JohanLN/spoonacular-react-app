interface PageFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const PageFallback = ({ error, resetErrorBoundary }: PageFallbackProps) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-3xl font-semibold text-red-500">
        Oops! This page encountered an error.
      </h1>
      <pre className="text-gray-700">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default PageFallback;
