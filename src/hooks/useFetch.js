import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            setStatus('fetching');
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
            setStatus('fetched');
        };

        fetchData();
    }, [url]);

    return { status, data };
};