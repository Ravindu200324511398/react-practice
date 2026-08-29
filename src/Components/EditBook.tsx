import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';


interface Book {
    bookId: number;
    title: string;
    author: string;
    genre: string;
    publishedYear: number;
  }

  interface EditBookProps {
  show: boolean;
  selectedBook: Book | null;
  handleClose: () => void;
  handleSave: (updatedBook: Book) => void;
}


function EditBook({ show, selectedBook, handleClose, handleSave }: EditBookProps) {
    const [book,setBook] = useState<Book | null>({
        bookId:0,
        title:"",
        author:"",
        genre:"",
        publishedYear:0
    });

useEffect(() => {
    if (selectedBook) {
        setBook({...selectedBook});
    }
}, [selectedBook]);

const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setBook((prevBook) => {
        if (!prevBook) {
            return prevBook;
        }

        return {
            ...prevBook,
            [name]: name === 'bookId' || name === 'publishedYear' ? Number(value) : value,
        } as Book;
    });
};

const handleOnSave = () => {
    if (book) {
        handleSave(book);
    }
}

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel controlId="floatingInput" label="Book Id" className="mb-3">

        <Form.Control 
        type="text" 
        name="bookId"
        />
      </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
        <Form.Control 
        type="text" 
        name="title"
        />
      </FloatingLabel>
      
      <FloatingLabel controlId="floatingInput" label="Author" className="mb-3">
        <Form.Control 
        type="text" 
        name="author"
        />
      </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Genre" className="mb-3">
        <Form.Control 
        type="text" 
        name="genre"
        />
      </FloatingLabel>
      
        <FloatingLabel controlId="floatingInput" label="Published Year" className="mb-3">
        <Form.Control 
        type="text" 
        name="publishedYear"
        />
      </FloatingLabel>

      
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOnSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default EditBook;