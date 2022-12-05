import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import './ProfilePage.css';
import Navbar from './Navbar';
import HomePage from './HomePage';
import { Link } from 'react-router-dom';


const ProfilePage = () => {
    const user = useSelector(state => state.auth.userData)
    console.log(user);
    const [pins, setPins] = React.useState([]);


    const getNewPins = () => {
        fetch(`https://pinterest-clone-server.onrender.com/created?email=${user.email}`)
            .then(res => res.json())
            .then((res) => { setPins(res.pins) });
    }

    useEffect(() => {
        getNewPins()
    }, []);

    return (
        <>
            <Navbar />
            <div style={{ width: "50%", margin: "auto", textAlign: "center", marginTop: "80px" }}>
                <Avatar className="avatar" sx={{ width: 100, height: 100 }} alt="Remy Sharp" src={user?.imageUrl} />
                <h1 className='profile_name'>{user?.name}</h1>
                <p style={{ color: "grey" }}>{11} following</p>
                <br />
                <div className="profile_button">
                    <button>Share</button>
                    <Link to="/"><button id='logoutButton'>Logout</button></Link>
                </div>
                <h2 style={{ marginTop: "80px", marginBottom: "-60px" }}>Created</h2>
                <HomePage  pins={pins} />
            </div>
        </>
    )
}

export default ProfilePage