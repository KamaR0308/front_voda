import React, { lazy } from 'react';
import { Route, Routes } from 'react-router';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Admin from '../../pages/Admin/Admin';
import Register from '../Register/Register';
import DetailCard from '../DetailCard/DetailCard';

const MainPage = lazy(() => import('../../pages/Main/MainPage'))
const Dashboard = lazy(() => import('../../pages/Dashboard/Dashboard'))

const Routing = () => {

    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<MainPage />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/register' element={<Register />} />
                <Route  path='/dashboard' element={<Dashboard />} />
                <Route path="/detail/:uuid" element={<DetailCard/>} />
            </Route>
        </Routes>
    );
};

export default Routing;