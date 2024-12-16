import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import fetchCoinDatails from "../Services/fetchCoinDetails";
import { useEffect } from "react";
import parse from "html-react-parser";
import currencyStore from "../state/store";
import PageLoader from "../Components/PageLoader/PageLoader";
function CoinDetailsPage() {
    const { currency } = currencyStore();
    const { coinID } = useParams();
    const { data: coin, isError, isLoading } = useQuery(['coin', coinID], () => fetchCoinDatails(coinID), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    useEffect(() => {
        console.log(coin);
    }, [coin])

    if (isLoading) {
        return <PageLoader/>
    }
    if (isError) {
        return <div>Error : Something Went Wrong </div>
    }

    return (
        <div className="flex flex-col mb-3 md:flex-row">
            <div className="flex flex-col items-center w-full mt-4 border-r-2 border-gray-500 md:w-1/3 md:mt-0">
                <img
                    src={coin?.image?.large}
                    alt={coin?.name}
                />

                <h1 className="text-4xl font-bold ">
                    {coin?.name}
                </h1>

                <p className="w-full px-6 py-3" >
                    {parse(coin?.description?.en)}
                </p>

                <div className="flex flex-col w-full md:flex-row md:justify-around">
                    <div className="flex items-center mb-4 md:mb-0">
                        <h1 className="text-xl font-bold text-yellow-400">Rank</h1>
                        <span className="ml-3 text-xl font-bold">{coin?.market_cap_rank}</span>
                    </div>
                    <div className="flex items-center mb-4 md:mb-0">
                        <h1 className="text-xl font-bold text-yellow-400">Current Price</h1>
                        <span className="ml-3 text-xl font-bold" >{coin?.market_data.current_price[currency]}</span>
                    </div>
                </div>
            </div>
            <div className="w-full p-5 md:w-2/3">
                <h1>Coin Information</h1>
            </div>
        </div>


    )
}
export default CoinDetailsPage;