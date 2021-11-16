import { useCallback, useState } from "react"

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendReq = useCallback(async (params, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const httpParams = {
                method: params.method
            };
            if (params.method === 'POST') {
                httpParams.body = JSON.stringify(params.body);
                httpParams.headers = params.headers;
            };
            const response = await fetch(
                params.url,
                httpParams
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();

            applyData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        sendReq
    };
};

export default useHttp;