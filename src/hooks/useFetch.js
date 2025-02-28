import { useEffect, useState } from "react"

export const useFetch = ({url}) => {

    const [data, setData] = useState(
        {
            data: null,
            loading: true,
            error:null
        }
    );

    // usar async await para hacer el fetch
    const fetchData = async () => {
        setData({...data, loading: true});
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData({data, loading: false, error: null});
        } catch (error) {
            setData({...data, loading: false, error: error});
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return {
        data: data.data,
        loading: data.loading,
        error: data.error
    }
}

