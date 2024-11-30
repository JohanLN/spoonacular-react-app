interface GlobalFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const GlobalFallback = ({ error, resetErrorBoundary }: GlobalFallbackProps) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">Something went wrong!</h1>
      <p className="text-gray-700 mt-2">We encountered a critical error.</p>
      <pre className="mt-4 text-sm text-gray-500">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Reload App
      </button>
    </div>
  );
};

export default GlobalFallback;
