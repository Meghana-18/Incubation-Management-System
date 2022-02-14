import React from 'react';
import ReactDOM from 'react-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Table from 'react-bootstrap/Table';

    function Recents(){

        const now = 60;

        return(
            <div>
            <ProgressBar animated now={45} now={now} label={`${now}`}  />,
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>Startup Name</th>
                <th>Date</th>
                <th>Email Id</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Flying Saucer</td>
                <td>25-09-2021</td>
                <td>flyingsaucers@gmail.com</td>
                </tr>
                <tr>
                <td>2</td>
                <td>CakebyKilo</td>
                <td>17-09-2021</td>
                <td>cakebykilo@yahoo.in</td>
                </tr>
            </tbody>
            </Table>
            </div>
    )
}

export default Recents;