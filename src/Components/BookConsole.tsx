import Table from 'react-bootstrap/Table';
import {getBooks} from '../Service/Books/GetBooks';
import { useEffect } from 'react';
import { useState } from 'react';

export function BookConsole(){
  interface Book {
    bookId: number;
    title: string;
    author: string;
    genre: string;
    publishedYear: number;
  }

const [books, setBooks] = useState<Book[]>([]);

useEffect(() => {
    const loadData = async () => {
        try{
            const bookDetails = await getBooks();
            console.log("Book details:", bookDetails);
            setBooks(bookDetails);
        } catch (error) {
            console.error("Error loading book details:", error);
        }
    };
    loadData();   
    },[]);


const tHeads:string[] = [
    "Book ID", "Title", "Author", "Genre", "Published Year"
];

    return (
        <>
        <Table striped bordered hover>
      <thead>
        <tr>
        {tHeads.map((head) => (
            <th>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {books.map((row) => (
          <tr key={row.bookId}>
            {Object.values(row).map((cell) => (
               <td>{cell}</td>   
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
        </>
    )
}


