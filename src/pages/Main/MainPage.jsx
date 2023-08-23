import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            navigate('/dashboard')
        } else {
            navigate('/register')
        }
    }, [])

    return (
        <div>
            MainPage
        </div>
    );
};

export default MainPage;