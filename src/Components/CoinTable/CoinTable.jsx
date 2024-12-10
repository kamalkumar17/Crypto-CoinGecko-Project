import { useEffect, useState } from "react";
import { fetchCoinData } from "../../Services/fetchCoinData";
import { useQueries, useQuery } from "react-query";

function CoinTable(){
    const [page,setPage]=useState(1);
    const {data,isLoading,error,isError}=useQuery(['coins',page],()=>fetchCoinData(page,'usd'),{
        retry:2,
        retryDelay:1000,
        cacheTime:1000*60*2,
        staleTime:1000*60*2

    });

    useEffect(()=>{
        console.log(data);
    },[data])

    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error : {error.message}</div>
    }

    return(
        <>
            Coin Table <button onClick={()=>setPage(page+1)}>Click </button>
            {page}
        </>
    )
}
export default CoinTable;