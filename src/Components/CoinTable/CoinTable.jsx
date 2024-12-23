import { useState } from "react";
import { fetchCoinData } from "../../Services/fetchCoinData";
import { useQuery } from "react-query";
import currencyStore from "../../state/store";
import { useNavigate } from "react-router-dom";
import PageLoader from "../PageLoader/PageLoader";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";
function CoinTable() {
   
    const navigate = useNavigate();
    const { currency } = currencyStore();
    const [page, setPage] = useState(1);
    const { data, isLoading, error, isError } = useQuery(['coins',page,currency], () => fetchCoinData(page,currency), {
        // retry: 2,
        // retryDelay: 1000,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2

    });

    function handleCoinRedirect(id){
        navigate(`./details/${id}`);
        
    }

    if (isLoading) {
        return <PageLoader/>
    }
    if (isError) {
        return <CustomErrorBoundary/>
    }

    
    return (
        <div className="flex flex-col items-center justify-center gap-5 my-5 font-semibold w-[80vw] mx-auto">
            <div className="flex items-center justify-center w-full gap-4 px-2 py-4 font-semibold text-black bg-yellow-500">
                {/* header of out table */}
                <div className="basis-[35%]">
                    Coin
                </div>
                <div className="basis-[25%]">
                    Price
                </div>
                <div className="basis-[20%]">
                    Change_24h
                </div>
                <div className="basis-[20%]">
                    Market_Cap
                </div>
            </div>

            <div className="flex flex-col w-[80vw] mx-auto">
                {isLoading && <div>Loading...</div>}
                {data && data.map((coin) => {
                    return (
                        <div onClick={()=> handleCoinRedirect(coin.id)} key={coin.id} className="flex items-center justify-between w-full px-2 py-4 font-semibold text-white bg-transparent cursor-pointer">
                            <div className="flex items-center justify-start gap-3 basis-[35%]">
                                <div className="h-[5rem] w-[5rem]">
                                    <img src={coin.image} className="w-full h-full" loading="lazy" />
                                </div>
                                <div className="flex flex-col ">
                                    <div>{coin.name}</div>
                                    <div>{coin.symbol}</div>
                                </div>


                            </div>
                            <div className="basis-[25%]">
                                {coin.current_price}
                            </div>
                            <div className="basis-[20%]">
                                {coin.price_change_24h}
                            </div>
                            <div className="basis-[20%]">
                                {coin.market_cap}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="flex items-center justify-center gap-4 mx-auto">
                <button
                    disabled={page===1}
                    onClick={() => setPage(page - 1)}
                    className="text-2xl text-white btn btn-primary btn-wide">
                    Prev
                </button>
                <button
                    onClick={() => setPage(page + 1)}
                    className="text-2xl text-white btn btn-secondary btn-wide">
                    Next
                </button>

            </div>
        </div>

    )
}
export default CoinTable;



