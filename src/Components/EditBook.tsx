import Button from 'react-bootstrap/Button';
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
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default EditBook;