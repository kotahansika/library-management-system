import React, { Component } from 'react';
import StudentService from '../../services/StudentService';
import { Link } from 'react-router-dom';

class CreateStudentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            firstname: "",
            lastname: "",
            mail: "",
            mobile: "",
            roll: "",
            standard: "",
            subject: '',
            author: '',
            issue: '',
            returned: '',
            currentStep: 1,
        };
        this.clearFields=this.clearFields.bind(this);
        this.clearBookFields=this.clearBookFields.bind(this);
    }
componentDidMount() {
    if(this.state.id==="_add") {
        return;
    } else {
        StudentService.getStudentsById(this.state.id).then((res) => {
                        let student = res.data;
                        this.setState({
                            firstname: student.firstname,
                            lastname: student.lastname,
                            mail: student.mail,
                            mobile: student.mobile,
                            roll: student.roll,
                            standard: student.standard,
                            subject: student.subject,
                            author: student.author,
                            issue: student.issue,
                            returned: student.returned,
                        });
                    });
                }
}

saveStudent = (e) => {
    e.preventDefault();
    let student = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        mail: this.state.mail,
        mobile: this.state.mobile,
        roll: this.state.roll,
        standard: this.state.standard,
        subject: this.state.subject,
        author: this.state.author,
        issue: this.state.issue,
        returned: this.state.returned,
    };
    console.log('student =>' + JSON.stringify(student));
            if (this.state.id === '_add') {
                StudentService.createStudents(student)
                    .then(res => {
                        this.props.history.push("/students");
                    })
                    .catch((error) => {
                        console.error("Error adding student:", error);
                    });
            } else {
                StudentService.updateStudents(student, this.state.id)
                    .then((res) => {
                        this.props.history.push('/students');
                    })
                    .catch((error) => {
                        console.error("Error updating student:", error);
                    });
            }
        }
    
        areAllFieldsFilled() {
            const { firstname, lastname, mail, mobile, roll} = this.state;
            return firstname && lastname && mail && mobile && roll;
        }
        areAllBookFieldsFilled(){
            const { standard, subject, author, issue, returned} = this.state;
            return standard && subject && author && issue && returned;
        }
        clearFields() {
            this.setState({
                firstname: "",
                lastname: "",
                mail: "",
                mobile: "",
                roll: "",
            });
        }
        clearBookFields() {
            this.setState({
                standard: "",
                subject: "",
                author: "",
                issue: "",
                returned: "",
            });
        }

    
    

        changeFirstNameHandler = (event) => {
            this.setState({ firstname: event.target.value });
        }
    
        changeLastNameHandler = (event) => {
            this.setState({ lastname: event.target.value });
        }
    
        changeEmailidHandler = (event) => {
            this.setState({ mail: event.target.value });
        }
    
        changeMobilenoHandler = (event) => {
            this.setState({ mobile: event.target.value });
        }
    
        changeRollnoHandler = (event) => {
            this.setState({ roll: event.target.value });
        }
        changeStandardHandler = (event) => {
            this.setState({ standard: event.target.value });
        }
    
        changeSubjectHandler = (event) => {
            this.setState({ subject: event.target.value });
        }
    
        changeAuthorHandler = (event) => {
            this.setState({ author: event.target.value });
        }
    
        changeIssueHandler = (event) => {
            this.setState({ issue: event.target.value });
        }
    
        changeReturnedHandler = (event) => {
            this.setState({ returned: event.target.value });
        }
        getTitle() {
        if (this.state.id === '_add') 
        {
            if(this.state.currentStep === 1)
            {
            return <h3 className='text-center full-width '>  Add Student  </h3>;
            }
            else{
                return <h3 className='text-center full-width '>  Add Book  </h3>;
            }
        }
        else {
            if(this.state.currentStep===1)
            {
            return <h3 className='text-center full-width'> Update Student</h3>;
            }
            else
            {
                return <h3 className='text-center full-width'> Update Book</h3>;
            }
        }
    }
    nextStep = () => {
        this.setState((prevState) => ({
            currentStep: prevState.currentStep + 1,
        }));
    };
    backStep = () => {
        this.setState((prevState) => ({
            currentStep: prevState.currentStep - 1,
        }));
    };


    renderInputs() {
        const { currentStep } = this.state;

        if (currentStep === 1) {
            return (
                <>
                    {/* First Step: Student Details */}
                    <div className='form-group'>
                        <label> Student First Name</label>
                        <input
                            placeholder='Enter First Name of the Student'
                            name='firstname'
                            className='form-control'
                            value={this.state.firstname}
                            onChange={this.changeFirstNameHandler}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label> Student Last Name</label>
                        <input
                            placeholder='Enter Last Name of the Student'
                            name='lastname'
                            className='form-control'
                            value={this.state.lastname}
                            onChange={this.changeLastNameHandler}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Email ID</label>
                        <input
                            placeholder='Enter Email ID of the Student'
                            name='mail'
                            className='form-control'
                            value={this.state.mail}
                            onChange={this.changeEmailidHandler}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Mobile Number</label>
                        <input
                            placeholder='Enter Mobile Number of the Student'
                            name='mobile'
                            className='form-control'
                            value={this.state.mobile}
                            onChange={this.changeMobilenoHandler}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>University Roll No.</label>
                        <input
                            placeholder='Enter University Roll No. of the Student'
                            name='roll'
                            className='form-control'
                            value={this.state.roll}
                            onChange={this.changeRollnoHandler}
                            required
                        />
                    </div>
                </>
            );
        } else if (currentStep === 2) {
            return (
                <>
                    {/* Second Step: Book Details */}
                    <div className='form-group'>
                        <label>Year</label>
                        <input
                            placeholder='Standard'
                            name='standard'
                            className='form-control'
                            value={this.state.standard}
                            onChange={this.changeStandardHandler}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Subject</label>
                        <input
                            placeholder='Subject'
                            name='subject'
                            className='form-control'
                            value={this.state.subject}
                            onChange={this.changeSubjectHandler}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Author Name</label>
                        <input
                            placeholder='Author Name'
                            name='author'
                            className='form-control'
                            value={this.state.author}
                            onChange={this.changeAuthorHandler}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Issue Date</label>
                        <input
                            placeholder='Issue Date'
                            name='issue'
                            className='form-control'
                            value={this.state.issue}
                            onChange={this.changeIssueHandler}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Return Date</label>
                        <input
                            placeholder='Return Date'
                            name='returned'
                            className='form-control'
                            value={this.state.returned}
                            onChange={this.changeReturnedHandler}
                            required
                        />
                    </div>
                </>
            );
        }
    }

    render() {
        return (
            <div>
                <div className='subheading-container'>
                    <div className='container'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            {
                                this.getTitle()
                            }
                            
                            <div className='card-body'>
                                <>
                                    {this.renderInputs()}
                                    {this.state.currentStep === 1 && (
                                        <>
                                        <Link to="/students" 
                                            className='btn btn-danger create-move-cancel'>
                                                Cancel
                                        </Link>

                                        <button 
                                            className='btn btn-primary btn-hover-green create-move-submit' 
                                            onClick={this.nextStep}
                                            disabled ={!this.areAllFieldsFilled()}
                                        >
                                            Next
                                        </button>

                                        <button
                                            className='btn btn-warning create-move-clear'
                                            onClick={this.clearFields}
                                        >
                                        Clear
                                        </button>
                                        </>

                                    )}
                                    {this.state.currentStep === 2 && (
                                        <>
                                            <button 
                                            className='btn btn-danger create-move-cancel'
                                            onClick={this.backStep}
                                        >
                                            Back
                                        </button>
                                            <button
                                                className='btn btn-primary btn-hover-green create-move-submit'
                                                onClick={this.saveStudent}
                                                disabled={!this.areAllBookFieldsFilled()}
                                            >
                                                Submit
                                            </button>
                                            <button 
                                                className='btn btn-warning create-move-clear'
                                                onClick={this.clearBookFields}
                                    >
                                                Clear
                                            </button>
                                        </>
                                    )}
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateStudentComponent;