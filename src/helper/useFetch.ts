import useSWR from 'swr';

const fetcher = async (url: any) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('An error occurred while fetching the data.');
    }
    return response.json();
};

const useFetch = (path: any) => {
    const {data, error} = useSWR(`/api/${path}`, fetcher);

    const isLoading = !data && !error;

    return {data, error, isLoading};
};

export default useFetch;
