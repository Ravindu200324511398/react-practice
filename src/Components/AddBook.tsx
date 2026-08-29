import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addBook } from '../Service/Books/AddBook';


interface Book {
    bookId: number;
    title: string;
    author: string;
    genre: string;
    publishedYear: number;
  }

  interface AddBookProps {
  show: boolean;
  handleClose: () => void;
  handleAdd: (newBook: Book) => void;
}


function AddBook({ show, handleClose, handleAdd }: AddBookProps) {
    const [newbook,setNewBook] = useState<Book | null>({
        bookId:0,
        title:"",
        author:"",
        genre:"",
        publishedYear:0
    });


const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewBook((prevBook) => {
        if (!prevBook) {
            return prevBook;
        }

        return {
            ...prevBook,
            [name]: name === 'bookId' || name === 'publishedYear' ? Number(value) : value,
        } as Book;
    });
};

const handleOnSubmit = async() => {
    try{
    const addbook= await addBook(newbook as Book);
    handleAdd(addbook);
    handleClose();
    }catch(error){
        console.error("Error adding book:", error);
    }
    
};

   

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel controlId="floatingInput" label="Book Id" className="mb-3">

        <Form.Control 
        readOnly
        type="text" 
        name="bookId"
        value={newbook?.bookId}
        onChange={handleOnChange}
        />
      </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
        <Form.Control 
        type="text" 
        name="title"
        value={newbook?.title}
        onChange={handleOnChange}
        />
      </FloatingLabel>
      
      <FloatingLabel controlId="floatingInput" label="Author" className="mb-3">
        <Form.Control 
        type="text" 
        name="author"
        value={newbook?.author}
        onChange={handleOnChange}
        />
      </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Genre" className="mb-3">
        <Form.Control 
        type="text" 
        name="genre"
        value={newbook?.genre}
        onChange={handleOnChange}
        />
      </FloatingLabel>
      
        <FloatingLabel controlId="floatingInput" label="Published Year" className="mb-3">
        <Form.Control 
        type="text" 
        name="publishedYear"
        value={newbook?.publishedYear}
        onChange={handleOnChange}
        />
      </FloatingLabel>

      
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOnSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default AddBook;