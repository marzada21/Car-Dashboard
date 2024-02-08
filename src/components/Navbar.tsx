import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Button from './Button';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible);
    };

    const clicked = () => {
        setIsVisible(false);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-sky-800 p-4 shadow-lg opacity-80">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to="/" className="font-semibold text-xl tracking-tight">Car Dashboard</Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={dropDown} className="flex items-center px-3 py-2 text-white hover:text-gray-300">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className={`w-full lg:flex lg:items-center lg:w-auto ${isVisible ? 'block' : 'hidden'}`}>
                <div className="text-sm lg:flex-grow">
                    <Link to="/" onClick={clicked} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                        Home
                    </Link>
                    <Link to="/dashboard" onClick={clicked} className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4">
                        Cars
                    </Link>
                    {!isAuthenticated ? (
                        <Button onClick={signInOnClick} className="mt-4 lg:mt-0 text-white">
                            Login
                        </Button>
                    ) : (
                        <Button onClick={signOutOnClick} className="mt-4 lg:mt-0 text-white">
                            Sign Out
                        </Button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
