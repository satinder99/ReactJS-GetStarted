import { useState } from "react";
import { useEffect } from "react";

function useCurrencyInfo(currency){
    let [data,setData] = useState({})
    useEffect(()=>{
        fetch(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res)=> JSON.parse(res))
            .then((res)=>setData(res))
            console.log(data);
    },[currency])

    return data;
}

export default useCurrencyInfo;
