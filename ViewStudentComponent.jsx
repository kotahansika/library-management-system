import React, { Component } from 'react'
import StudentService from '../../services/StudentService';

class ViewStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            student: {},
        }
    }

    componentDidMount(){
        StudentService.getStudentsById(this.state.id).then( res => {
            this.setState({student: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Student Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Standard: { this.state.student.standard } </label>
                        </div>
                        <div className = "row">
                            <label> Subject:  { this.state.student.subject } </label>
                        </div>
                        <div className = "row">
                            <label> Author Name:  { this.state.student.author } </label>
                        </div>
                        <div className = "row">
                            <label> Issue Date:  { this.state.student.issue } </label>
                        </div>
                        <div className = "row">
                            <label> Return Date:  { this.state.student.returned } </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewStudentComponent;
