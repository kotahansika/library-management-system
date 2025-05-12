import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 style={{
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    justifyContent: "center",
                    fontWeight: 'bold',
                    paddingTop: '80px'
                }}>
                    Welcome to Library Management System
                </h1>
                
                {/* Added large library image in the middle */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '40px 0'
                }}>
                    <img 
                        src="/lib.jpeg"  // Using image from public folder
                        alt="Library" 
                        style={{
                            width: '100%',
                            maxWidth: '450px',
                            height: '230px',
                            borderRadius: '10px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                        }}
                    />
                </div>
                
                <div className='button-container-home'>
                    <Link to='/login' className='btn btn-primary-home'>START</Link>
                    {/* Added link to Return Books module */}
                    <Link to='/return-books' className='btn btn-secondary-home' style={{ marginLeft: '10px' }}>Return Books</Link>
                </div>
            </div>
        );
    }
}

export default Home;
