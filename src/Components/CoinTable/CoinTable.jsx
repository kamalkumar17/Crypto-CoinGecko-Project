import { useEffect } from "react";
import { fetchCoinData } from "../../Services/fetchCoinData";

function CoinTable(){
    useEffect(()=>{
        fetchCoinData();    
     },[])

    return(
        <>
            Coin Table
        </>
    )
}
export default CoinTable;