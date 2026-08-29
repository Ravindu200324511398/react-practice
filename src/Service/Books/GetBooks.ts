import axios from "axios";
const BASE_URL = "http://localhost:8080/api/v1/books";

export const getBooks = async () => {
    try{
        const response = await axios.get(BASE_URL);
        console.log("Books fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
}