import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LefNav = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() =>{
        fetch("https://the-new-dragon-server-shahanulislam.vercel.app/catagories")
        .then(res => res.json())
        .then(data => setCatagories(data))
        .catch(error => console.error(error))
    }, []) 
    return (
        <div>
            <h4>All Catagories</h4>
            <div className='ps-4'>
            {
                catagories.map(category => <p
                key={category.id}
                >
                    <Link to={`/category/${category.id}`} className='text-black text-decoration-none'>{category.name}</Link>

                </p> )
            }
            </div>
        </div>
    );
};

export default LefNav;