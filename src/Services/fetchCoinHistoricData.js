import axiosInstance from "../Helper/axiosInstance";

export async function fetchCoinHistoricData(id, interval='daily', days=7, currency = "usd") {
    try {
        const response = await axiosInstance.get(`/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}