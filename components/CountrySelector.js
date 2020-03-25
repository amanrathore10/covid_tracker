import useStats from "./useStats";

  
export default function CountrySelector({url}){
    const data = useStats(url);
    console.log('countrydata',data);
    function selectCountry(e){
        console.log(e.target.value);
    }
    return(
        <div>
            {!data.loading && data.stats
            ?
            <select name="" id="" onChange={selectCountry}>
                 {data.stats.countries.map(country=>{
                    return(
                        <option value={country.iso3}>{country.name}</option>
                    )
                })}
                
                
            </select>
            :''
            }
        </div>
    )
}