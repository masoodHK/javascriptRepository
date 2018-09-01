import React from 'react';
import './EmployeeTable.css';

export default function Employee(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.salary}</td>
            <td>{props.joiningDate}</td>
            <td><button className="btn" onClick={props.edit}>Edit</button></td>
            <td><button className="btn red" onClick={props.delete}>Delete</button></td>
        </tr>
    );
}