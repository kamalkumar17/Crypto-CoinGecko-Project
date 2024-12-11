import { useParams } from "react-router-dom";

function CoinDetailsPage(){
    const {coinID} = useParams();
return(
    <div>
        Coin Details Page {coinID}
    </div>
)
}
export default CoinDetailsPage;