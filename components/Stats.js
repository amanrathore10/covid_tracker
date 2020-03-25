import useStats from "./useStats";

export default function Stats(url){
    const {stats, loading} = useStats(url);
    console.log(stats)
    return(
        <div>
            
                {
                !loading && stats
                    ?
                <div>
                <p>Total cases: {stats.recovered.value + stats.confirmed.value + stats.deaths.value}</p>
                <p>Recovered: {stats.recovered.value}</p>
                <p>Confirmed: {stats.confirmed.value}</p>
                <p>Deaths: {stats.deaths.value}</p>
                </div>
                    :
                    'Loading...'
                }
            
        </div>
    )
}