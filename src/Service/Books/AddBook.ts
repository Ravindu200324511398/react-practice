import axios from "axios";
const BASE_URL = "http://localhost:8080/api/v1/books";

interface Book {
    bookId: number;
    title: string;
    author: string;
    genre: string;
    publishedYear: number;
}

export const addBook = async (newBook: Book) => {
    try{
        const response = await axios.post(BASE_URL, newBook);
        console.log("Book added successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error adding book:", error);
        throw error;
    }
}