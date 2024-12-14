import axiosInstance from "../Helper/axiosInstance";

export async function fetchCoinDatails(id) {
    try {
        const response = await axiosInstance.get(`/coins/${id}`);
        // console.log(id);
        return response.data ;
    } catch (error) {
        console.error(error);
        return null;
    }
}
export default fetchCoinDatails;