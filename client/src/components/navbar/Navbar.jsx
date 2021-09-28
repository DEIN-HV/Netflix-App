import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import './Navbar.scss'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../authContext/AuthContext';
import { logout } from '../../authContext/AuthAction';

function Navbar() {

    const [isCrolled, setIsCrolled] = useState(false);

    window.onscroll = () => {
        setIsCrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    const { dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div className={isCrolled ? "navbar scrolled" : "navbar "}>
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />

                    <span>Homepage</span>
                    <span className="navbarmainLinks">Series</span>
                    <span className="navbarmainLinks">Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img
                        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={handleLogout}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
