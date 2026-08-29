import axios from "axios";
const BASE_URL = "http://localhost:8080/api/v1/books";


export const deleteBook = async (bookId: number) => {
    try{
        const response = await axios.delete(`${BASE_URL}/${bookId}`);
        console.log("Book deleted successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error deleting book:", error);
        throw error;
    }
}