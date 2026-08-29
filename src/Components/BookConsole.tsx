import Table from 'react-bootstrap/Table';
import {getBooks} from '../Service/Books/GetBooks';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import EditBook from './EditBook';

export function BookConsole(){
  interface Book {
    bookId: number;
    title: string;
    author: string;
    genre: string;
    publishedYear: number;
  }

const [books, setBooks] = useState<Book[]>([]);
const [selectedBook, setSelectedBook] = useState<Book | null>(null);

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
    "Book ID", "Title", "Author", "Genre", "Published Year","Actions"
];

const handleEdit=(row : Book) =>{
  console.log("Edit button clicked for row:", row);
  setSelectedBook(row);
}

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
            <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <Button variant="outline-info" onClick={() => handleEdit(row)}>
                Update
              </Button>
              <Button variant="outline-danger">Delete</Button>
            </td>
          </tr>
        ))}

        


        {/* <tr>
          <td>B001</td>
          <td>The Great Gatsby</td>
          <td>F. Scott Fitzgerald</td>
          <td>Fiction</td>
          <td>1925</td>
          <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
              <Button variant="outline-info" onClick={handleEdit}>
                Update
              </Button>
              <Button variant="outline-danger">Delete</Button>
            </td>
        </tr>
 */}


      </tbody>
    </Table>
    <EditBook />
        </>
    )
}


