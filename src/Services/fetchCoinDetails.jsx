import axiosInstance from "../Helper/axiosInstance";

export async function fetchCoinData(id) {
    const perPage = 10;
    try {
        const response = await axiosInstance.get(`/coins/markets?${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
