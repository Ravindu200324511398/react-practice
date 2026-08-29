import Table from 'react-bootstrap/Table';

export function BookConsole(){
const tHeads:string[] = [
    "Book ID", "Title", "Author", "Genre", "Published Year"
];

    return (
        <>
        <Table striped bordered hover>
      <thead>
        <tr>
          {/* <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th> */}
          {tHeads.map((head) => (
            <th>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        </>
    )
}


