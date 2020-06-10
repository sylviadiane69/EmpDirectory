import React from 'react';
import '../styles/Table.css';

const Table = () => {

const employees = [
    { id: 1, name: 'Gloria Ramirez', title: 'CEO', salary: '500,000' },
    { id: 2, name: 'Gabriel Cervantes', title: 'Engineer', salary: '160,000' },
    { id: 3, name: 'Michelle Holub', title: 'Devloper', salary: '125,000' },
    { id: 4, name: 'Richard Allen', title: 'HR Manager', salary: '100,000' },
    { id: 5, name: 'Leslie Perez', title: 'Supervisor', salary: '175,000' },
    { id: 6, name: 'Matthew Scott', title: 'Engineer', salary: '165,000' },
    { id: 7, name: 'Judy Sanchez', title: 'Devloper', salary: '125,000' },
    { id: 8, name: 'Christopher James', title: 'Intern', salary: '55,000'},
  ]

  const renderEmployee = (employee, index) => {
    return (
      <tr key={index}>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.title}</td>
        <td>{employee.salary}</td>
      </tr>
    )
  }

  return (
    <div className="App">
      <h1>Employee Table</h1>
    <table striped border hover>
      <thread>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Title</th>
          <th>Salary</th>
        </tr>
      </thread>
      <tbody>
        {employees.map(renderEmployee)}
      </tbody>
    </table>
    </div>
  );
}

export default Table;


