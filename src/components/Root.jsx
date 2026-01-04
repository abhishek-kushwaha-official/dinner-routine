import { Outlet } from 'react-router-dom';
import './Root.css';
import MainNavigation from './MainNavigation';

export default function RootLayout() {
    return (
        <>
            <div className='nav'>
                <h1 >NavBar</h1>
                <MainNavigation />
                </div>
                <Outlet />
            
        </>
    );
}