import axios from "axios";
const BASE_URL = "http://localhost:8080/api/v1/books";

interface Book {
    bookId: number;
    title: string;
    author: string;
    genre: string;
    publishedYear: number;
}

export const updateBook = async (bookId: number, updatedBook: Book) => {
    try{
        const response = await axios.put(`${BASE_URL}/${bookId}`, updatedBook);
        console.log("Book updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating book:", error);
        throw error;
    }
}