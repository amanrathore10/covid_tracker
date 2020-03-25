import { useState, useEffect } from "react"
import useStats from "../components/useStats";
import Stats from "../components/Stats";
import CountrySelector from "../components/CountrySelector";




export default function Index(){


    return (
    <div>
        <Stats url='https://covid19.mathdro.id/api'></Stats>
        <CountrySelector url='https://covid19.mathdro.id/api/countries'></CountrySelector>
    </div>

    )
}


