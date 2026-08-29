import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';


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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default EditBook;