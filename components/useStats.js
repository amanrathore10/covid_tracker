import { useState, useEffect } from "react";

export default function useStats({url}){
    const [stats,setStats] = useState();
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        async function fetchData(){
            setLoading(true);
            const data = await fetch(url).then(data=>data.json())
            setStats(data);
            setLoading(false)
        }

        fetchData();
        return () => {
            cleanup
        };
    }, [url])

    return {stats,loading}
}