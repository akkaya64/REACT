import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
//import Header from '../components/header/header';

const UserLayout = () => {
    return (
        <div>
           <Header/>
            <Outlet />
            <footer>
                &copy; 2023 Akkayalar Limited
            </footer>
        </div>
    )
}

export default UserLayout