"use client"

type ErrorUIProps = {
    error: {
        message: string;
        digest: string;
    }
    reset: () => void
}

const error = ( {error, reset }: ErrorUIProps) => {
    console.log(error?.message, error.digest, reset)
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">post segment error.tsx</h1>
            
            <p className="text-gray-600 text-lg mb-8">
             오류 원인: {error?.message} | 오류 해쉬값: {error?.digest}
            </p>
            <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={reset}
            >
            Retry
            </button>
        </div>
    );
};

export default error;