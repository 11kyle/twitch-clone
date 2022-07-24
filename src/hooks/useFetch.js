import { useEffect, useState } from "react"

const useFetch = (query) => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
            setStatus('fetching');
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setStatus('fetched');
        };

        fetchData();
    }, [query]);

    return { status, data };
};