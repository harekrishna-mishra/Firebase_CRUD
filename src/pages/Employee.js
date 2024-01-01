import React from "react";
import Table from 'react-bootstrap/Table';
import Title from "../components/TitleEmp"

function Emp() {
    return (
        <div>
            <Title/>
            <div>
                <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>EMP ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ADDRESS</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Mark</td>
                        <td>address@gmail.com</td>
                        <td>@mdo</td>
                        <td><button id="sbmt" className="for_font btn my-3">Edit</button></td>
                        <td><button id="sbmt" className="for_font btn my-3">Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>address@gmail.com</td>
                        <td>@fat</td>
                        <td><button id="sbmt" className="for_font btn my-3">Edit</button></td>
                        <td><button id="sbmt" className="for_font btn my-3">Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>address@gmail.com</td>
                        <td>@fat</td>
                        <td><button id="sbmt" className="for_font btn my-3">Edit</button></td>
                        <td><button id="sbmt" className="for_font btn my-3">Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>address@gmail.com</td>
                        <td>@fat</td>
                        <td><button id="sbmt" className="for_font btn my-3">Edit</button></td>
                        <td><button id="sbmt" className="for_font btn my-3">Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>address@gmail.com</td>
                        <td>@fat</td>
                        <td><button id="sbmt" className="for_font btn my-3">Edit</button></td>
                        <td><button id="sbmt" className="for_font btn my-3">Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>address@gmail.com</td>
                        <td>@fat</td>
                        <td><button id="sbmt" className="for_font btn my-3">Edit</button></td>
                        <td><button id="sbmt" className="for_font btn my-3">Delete</button></td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </div>
    )
}

export default Emp;