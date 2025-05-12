import React, { Component } from 'react';

class ReturnBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookId: '',
            successMessage: '',
            errorMessage: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ bookId: event.target.value, successMessage: '', errorMessage: '' });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { bookId } = this.state;

        if (bookId.trim() === '') {
            this.setState({ errorMessage: 'Please enter the Book ID to return.', successMessage: '' });
            return;
        }

        // Simulate API call to return the book
        this.setState({
            successMessage: `Book with ID "${bookId}" has been successfully returned.`,
            bookId: '',
            errorMessage: ''
        });
    }

    render() {
        const { bookId, successMessage, errorMessage } = this.state;

        return (
            <div style={{
                maxWidth: '400px',
                margin: '50px auto',
                padding: '30px',
                borderRadius: '10px',
                backgroundColor: '#f5f5f5',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Return a Book</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="bookId" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555' }}>
                        Book ID:
                    </label>
                    <input
                        type="text"
                        id="bookId"
                        value={bookId}
                        onChange={this.handleInputChange}
                        placeholder="Enter Book ID"
                        style={{
                            width: '100%',
                            padding: '10px',
                            marginBottom: '15px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            fontSize: '16px'
                        }}
                    />
                    {errorMessage && <div style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</div>}
                    {successMessage && <div style={{ color: 'green', marginBottom: '10px' }}>{successMessage}</div>}
                    <button type="submit"
                        style={{
                            width: '100%',
                            padding: '12px',
                            backgroundColor: '#007bff',
                            border: 'none',
                            borderRadius: '5px',
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            cursor: 'pointer'
                        }}
                    >
                        Return Book
                    </button>
                </form>
            </div>
        );
    }
}

export default ReturnBooks;
