import React, { Component } from 'react';
import StudentService from '../../services/StudentService';
import { Link } from "react-router-dom";

class ListStudentComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            students:[]
        }
        // this.addStudent=this.addStudent.bind(this);
        // this.editStudent=this.editStudent.bind(this);
        this.deleteStudent=this.deleteStudent.bind(this);
    }
    // editStudent(id)
    // {
    //     this.props.history.push(`/update-student/${id}`);
    // }

    // editStudent(id)
    // {
    //     this.props.history.push(`/add-student/${id}`);
    // }
    // viewStudent(id)
    // {
    //     this.props.history.push(`/view-student/${id}`);
    // }
    
    deleteStudent(id) {
        StudentService.deleteStudents(id)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({ students: this.state.students.filter(student => student.id !== id) });
                } else {
                    console.error("Failed to delete student. Response status: " + response.status);
                }
            })
            .catch((error) => {
                console.error("Error deleting student:", error);
            });
    }
    
    componentDidMount()
    {
        StudentService.getStudents().then((res) => {
            this.setState({students:res.data});
        });
    }
    // addStudent()
    // {
    //     this.props.history.push('/add-student');
    // }
    render() {
        return (
            <div className='subheading-container'>
                <div className='bg'>
                    <h2 className='text-center underlined'> Student List</h2>
                    {/* {
                    
                    <div>
                        <Link to='/add-Student' className='btn btn-primary '> Add Student</Link>
                    </div>
                    
                    } */}
                    <div className="container">
                        <div className='center-table'>
                            <table className='table table-striped table-bordered '>
                                <thead>
                                    <tr>
                                        <th> Student First Name</th>
                                        <th> Student Last Name</th>
                                        {/* <th> Student Email Id</th> */}
                                        <th> University Roll no.</th>
                                        <th> Student Mobile no.</th>
                                        <th className='k'> Actions</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.students.map((student) => (
                                        <tr key={student.id}>
                                        <td> {student.firstname}</td>
                                        <td> {student.lastname}</td>
                                        {/* <td> {student.mail}</td> */}
                                        <td> {student.roll}</td>
                                        <td> {student.mobile}</td>
                                        <td>
                                            {/* <Link to='/update-Student' className='btn btn-primary '> Update </Link> */}
                                            <Link to={`/add-student/${student.id}`} className='btn btn-primary-view'> Update </Link>
                                            <button onClick={ () => this.deleteStudent(student.id)} className='btn btn-danger move'> Delete </button>
                                            <Link to={`/view-student/${student.id}`} className='btn btn-secondary-view move'> View </Link>
                                        </td>
                                        </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </div>
        );
    }
}

export default ListStudentComponent;