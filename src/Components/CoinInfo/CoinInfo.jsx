import Alert from "../Alert/Alert";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
import { charDays } from "../../Helper/constants";

Chart.register(CategoryScale);

function CoinInfo({ historicData, setDays, setCoinInterval, days, currency }) {
    function changeDayHandler(e) {
        console.log(e.target.options[e.target.selectedIndex].value)
        const daySelected = e.target.options[e.target.selectedIndex].value;
        if(daySelected===1){
            setCoinInterval?.('');
        }else{
            setCoinInterval?.('daily');
        }
        setDays?.(e.target.options[e.target.selectedIndex].value);
    }

   

    if (!historicData) {
        return <Alert message={"No Data Available"} type="warning" />;
    }

    return (
        <div className="flex flex-col items-center justify-center w-full p-6 mt-6 ">
            <div className="h-[300px] w-full">
                <Line
                    data={{
                        labels: historicData.prices.map((coinPrice) => {
                            let date = new Date(coinPrice[0]); // CONVERTING UNIX TIMESTAMP TO DATE
                            let time = date?.getHours() > 12
                                ? `${date?.getHours() - 12}:${date.getMinutes()} PM`
                                : `${date?.getHours()}:${date.getMinutes()} AM`;
                            return days === 1 ? time : date.toLocaleDateString();
                        }),
                        datasets: [
                            {
                                label: `Price (Past ${days} ${days === '1' ? 'Day' : "Days"}) in ${currency?.toUpperCase()}`,
                                data: historicData.prices.map(coinPrice => coinPrice[1]),
                            },
                        ],
                    }}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        elements: {
                            point: {
                                radius: 0
                            }
                        }
                    }}
                />
            </div>
            <div className="flex justify-center w-full mt-5">
                <select className="w-full max-w-xs select select-accent" onChange={changeDayHandler}>
                    {charDays.map((day, index) => {
                        return (
                            <option selected={days == day.value} key={index} value={day.value}>
                                {day.label}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
}

export default CoinInfo;