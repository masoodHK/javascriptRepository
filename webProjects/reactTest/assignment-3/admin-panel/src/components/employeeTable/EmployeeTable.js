import React, { Component } from 'react';
import swal from 'sweetalert';
import Employee from './Employee';

export default class EmployeeTable extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            listOfEmployees: [
                {
                    id: 1,
                    name: "Leanne Graham",
                    email: "Sincere@april.biz",
                    salary: 0,
                    joiningDate: 'mm-dd-yyyy'
                },
                {
                    id: 2,
                    name: "Ervin Howell",
                    email: "Shanna@melissa.tv",
                    salary: 0,
                    joiningDate: 'mm-dd-yyyy'
                },
                {
                    id: 3,
                    name: "Clementine Bauch",
                    email: "Nathan@yesenia.net",
                    salary: 0,
                    joiningDate: 'mm-dd-yyyy'
                },
                {
                    id: 4,
                    name: "Patricia Lebsack",
                    email: "Julianne.OConner@kory.org",
                    salary: 0,
                    joiningDate: 'mm-dd-yyyy'
                },
                {
                    id: 5,
                    name: "Chelsey Dietrich",
                    email: "Lucio_Hettinger@annie.ca",
                    salary: 0,
                    joiningDate: 'mm-dd-yyyy'
                },
                {
                    id: 6,
                    name: "Mrs. Dennis Schulist",
                    email: "Karley_Dach@jasper.info",
                    salary: 0,
                    joiningDate: 'mm-dd-yyyy'
                },
                {
                    id: 7,
                    name: "Kurtis Weissnat",
                    email: "Telly.Hoeger@billy.biz",
                    salary: 0,
                    joiningDate: 'mm-dd-yyyy'
                },
                {
                    id: 8,
                    name: "Nicholas Runolfsdottir V",
                    email: "Sherwood@rosamond.me",
                    salary: 0,
                    joiningDate: 'mm-dd-yyyy'
                },
                {
                    id: 9,
                    name: "Glenna Reichert",
                    email: "Chaim_McDermott@dana.io",
                    salary: 0,
                    joiningDate: 'mm-dd-yyyy'
                },
                {
                    id: 10,
                    name: "Clementina DuBuque",
                    email: "Rey.Padberg@karina.biz",
                    salary: 0,
                    joiningDate: 'mm-dd-yyyy'
                }
            ],
            employeeFormStatus: false,
            inputEmployeeID: null,
            inputEmployeeName: "",
            inputEmployeeSalary: 0,
            inputEmployeeEmail: "",
            inputEmployeeJoiningDate: "",
            formMethod: ""
        }

        this.editEmployeeData = this.editEmployeeData.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.submit = this.submit.bind(this);
        this.employeeForm = this.employeeForm.bind(this);
        this.handleEmployeeNameChange = this.handleEmployeeNameChange.bind(this)
        this.handleEmployeeSalaryChange = this.handleEmployeeSalaryChange.bind(this)
        this.handleEmployeeEmailChange = this.handleEmployeeEmailChange.bind(this)
        this.handleEmployeeJoiningDateChange = this.handleEmployeeJoiningDateChange.bind(this)
    }

    employeeForm() {
        this.setState({
            employeeFormStatus: true,
            formMethod: "add"
        });
    }

    handleEmployeeSalaryChange(event) {
        this.setState({inputEmployeeSalary: event.target.value})
    }

    handleEmployeeEmailChange(event) {
        this.setState({inputEmployeeEmail: event.target.value})
    }

    handleEmployeeJoiningDateChange(event) {
        this.setState({inputEmployeeJoiningDate: event.target.value})
    }

    handleEmployeeNameChange(event) {
        this.setState({inputEmployeeName: event.target.value})
    }

    editEmployeeData(employeeID) {
        const employee = this.state.listOfEmployees.filter(e => e.id === employeeID)
        console.log(employee)
        this.setState({
            employeeFormStatus:true,
            inputEmployeeName: employee[0].name,
            inputEmployeeEmail: employee[0].email,
            inputEmployeeSalary: employee[0].salary,
            inputEmployeeJoiningDate: employee[0].joiningDate,
            inputEmployeeID: employeeID,
            formMethod: "edit"
        });

    }

    deleteEmployee(employeeID) {
        const { listOfEmployees } = this.state;
        const updatedList = listOfEmployees.filter(employee => {
            if(employee.id !== employeeID) {
                return employee;
            }
            return null
        });

        this.setState({listOfEmployees: updatedList});
        swal({
            title: "Success",
            text: "The emloyee has been deleted!",
            icon: "success",
        })
    }
    
    submit(event) {
        event.preventDefault();

        const {
            listOfEmployees,
            formMethod,
            inputEmployeeID,
            inputEmployeeEmail,
            inputEmployeeName,
            inputEmployeeJoiningDate,
            inputEmployeeSalary
        } = this.state
        switch(formMethod){
            case "add":
                const employeeData = {
                    id: listOfEmployees.length + 1,
                    name: inputEmployeeName,
                    email: inputEmployeeEmail,
                    salary: inputEmployeeSalary,
                    joiningDate: inputEmployeeJoiningDate
                }
        
                listOfEmployees.push(employeeData)
                this.setState({employeeFormStatus:false, listOfEmployees});
                swal({
                    title: "Success",
                    text: "The emloyee data has been added!",
                    icon: "success",
                })
                break
            case "edit":
                const updatedList = listOfEmployees.map(employee => {
                    if(employee.id === inputEmployeeID) {
                        employee.name = inputEmployeeName
                        employee.salary = inputEmployeeSalary
                        employee.joiningDate = inputEmployeeJoiningDate
                        employee.email = inputEmployeeEmail
                    }
                    return employee
                });
                this.setState({
                    employeeFormStatus: false,
                    listOfEmployees: updatedList,
                    inputEmployeeID: null,
                    inputEmployeeEmail: "",
                    inputEmployeeName: "",
                    inputEmployeeJoiningDate: "",
                    inputEmployeeSalary: "",
                })
                swal({
                    title: "Success",
                    text: "The emloyee data has been edited!",
                    icon: "success",
                })
                break
            default: break
        }
        
    }

    render() {
        const {
            inputEmployeeEmail,
            inputEmployeeSalary,
            inputEmployeeName,
            inputEmployeeJoiningDate } = this.state
        if(this.state.employeeFormStatus === true) {
            return (
                <div>
                    <form onSubmit={this.submit}>
                        <h1>Employee Form</h1>
                        <input
                            type="text"
                            placeholder="Employee Name"
                            value={inputEmployeeName}
                            onChange={this.handleEmployeeNameChange}/>
                        <span className="helper-text">Employee Name</span>
                        <input
                            type="email"
                            placeholder="Employee Email"
                            value={inputEmployeeEmail}
                            onChange={this.handleEmployeeEmailChange}/>
                        <span className="helper-text">Employee Email</span>
                        <input 
                            type="number"
                            placeholder="Employee Salary"
                            value={inputEmployeeSalary}
                            onChange={this.handleEmployeeSalaryChange}/>
                        <span className="helper-text">Employee Salary</span>
                        <input
                            type="text"
                            className="datepicker"
                            placeholder="Employee Joining Date"
                            value={inputEmployeeJoiningDate}
                            onChange={this.handleEmployeeJoiningDateChange}/>
                        <div className="helper-text">Employee Joining Date</div>
                        <button className="btn" type="submit">Submit</button>
                    </form>
                </div>
            )
        }
        
        else {

            return (
                <div>
                    <button className="btn" onClick={this.employeeForm}>Add an Employee</button>
                    <table className="striped">
                        <thead>
                            <tr>
                                <th>Employee Name</th>
                                <th>Email</th>
                                <th>Salary</th>
                                <th>Joining Date</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.listOfEmployees.map(employeeData => {
                                return <Employee
                                    key={employeeData.id}
                                    name={employeeData.name}
                                    email={employeeData.email}
                                    salary={employeeData.salary}
                                    joiningDate={employeeData.joiningDate}
                                    edit={() => this.editEmployeeData(employeeData.id)}
                                    delete={() => this.deleteEmployee(employeeData.id)}/>
                            })}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}