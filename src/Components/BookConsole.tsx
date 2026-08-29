import Table from 'react-bootstrap/Table';
import {getBooks} from '../Service/Books/GetBooks';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import EditBook from './EditBook';
import { deleteBook } from '../Service/Books/DeleteBook';

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
const [showEditModal, setShowEditModal] = useState(false);


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
  setShowEditModal(true);
}

const handleCloseEditModal = () => {
  setShowEditModal(false);
  setSelectedBook(null);
};

const handleSaveChanges = (updatedBook: Book) => {
  console.log("Save changes clicked for book:", updatedBook);
  // Here you would typically send the updated book data to your backend API
  // After saving, you might want to refresh the book list or update the state accordingly
  setShowEditModal(false);
  setSelectedBook(null);
};

const handleDelete = async(bookId: number) => {
  console.log("Delete button clicked for book ID:", bookId);
  // Here you would typically send a request to your backend API to delete the book
  // After deleting, you might want to refresh the book list or update the state accordingly
  await deleteBook(bookId)
  setBooks((books) => books.filter((book) => book.bookId !== bookId));
};

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
              <Button variant="outline-danger" onClick={() => handleDelete(row.bookId)}>
                Delete
              </Button>
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
    <EditBook 
    show = {showEditModal} 
    selectedBook = {selectedBook}
    handleClose = {handleCloseEditModal} 
    handleUpdate = {handleSaveChanges} 
    />
        </>
    )
}


