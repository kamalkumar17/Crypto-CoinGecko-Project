import CoinInfo from "./CoinInfo";
import PageLoader from "../PageLoader/PageLoader";
import Alert from "../Alert/Alert";
import useFetchCoinHistory from "../../Hooks/useFetchCoinHistory";

function CoinInfoContainer({ coinId }) {

    const { historicData,isError,isLoading,setCoinInterval,setDays,days,currency } = useFetchCoinHistory(coinId);

    if (isLoading) {
        return <PageLoader />
    }
    if (isError) {
        return <Alert message={"Error Fetching Data"} type="error" />
    }

    return (
        <CoinInfo
            historicData={historicData}
            setDays={setDays}
            setCoinInterval={setCoinInterval}
            days={days}
            currency={currency}
        />


    )
}
export default CoinInfoContainer;