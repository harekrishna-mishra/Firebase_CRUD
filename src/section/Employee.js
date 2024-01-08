import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Employee(e) {
  return (
    <div className="">
      <Card  className="crd1">
        <Card.Body>
          <Card.Title>Emp Id:-{e.data.empId}</Card.Title>
          <Card.Text>Name:- {e.data.empName}</Card.Text>
          <Card.Text>Email:- {e.data.empEmail}</Card.Text>
          <Card.Text>Salary:- {e.data.empSalary}</Card.Text>
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default Employee;
