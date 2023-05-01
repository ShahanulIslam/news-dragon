import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
           <h2>Terms and Condition</h2>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda exercitationem, deleniti earum odit dolor adipisci fugit in repudiandae id rem.</p> 
           <p>Go Back to <Link to="/register">Register</Link>
            </p>
        </div>
    );
};

export default Terms;