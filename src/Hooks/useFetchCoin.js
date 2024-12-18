import { useQuery } from "react-query";
import fetchCoinDatails from "../Services/fetchCoinDetails";
import currencyStore from "../state/store";

function useFetchCoin(coinID){
    const { currency } = currencyStore();
    const { data: coin, isError, isLoading } = useQuery(['coin', coinID], () => fetchCoinDatails(coinID), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    return{
        coin,
        isError,
        isLoading,
        currency
    }
}
export default useFetchCoin;