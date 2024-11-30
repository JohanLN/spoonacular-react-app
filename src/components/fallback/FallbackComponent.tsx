import { Button } from '../ui/button';

interface FallbackComponentProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const FallbackComponent = ({
  error,
  resetErrorBoundary,
}: FallbackComponentProps) => {
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center h-screen"
    >
      <h2 className="text-2xl font-bold text-red-500">Something went wrong!</h2>
      <pre className="text-gray-700">{error.message}</pre>
      <Button
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try again
      </Button>
    </div>
  );
};

export default FallbackComponent;
