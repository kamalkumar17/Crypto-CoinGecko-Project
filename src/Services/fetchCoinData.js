import axiosInstance from "../Helper/axiosInstance";

export async function fetchCoinData() {
    const perPage = 10;
    try {
        const response = await axiosInstance.get('/coins/markets?vs_currency=usd');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
