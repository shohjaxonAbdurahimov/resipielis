import { useState, useEffect } from "react"

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, sertError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const req = await fetch(url)
                if (!req.ok) {
                    throw new Error(req.statusText);
                }
                const data = await req.json()
                setData(data)
                setIsPending(false)
                sertError(null)
            } catch (error) {
                setIsPending(false)
                sertError(err.message)
            }
        };
        getData()
    }, [url])

    return { data, isPending, error }
}