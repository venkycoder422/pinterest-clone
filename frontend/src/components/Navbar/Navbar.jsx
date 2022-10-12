import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Gauth from '../Auth/Gauth'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/Auth/action';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Navbar = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [emaillogin, setEmaillogin] = useState("")
  const [emailsignin, setEmailsignin] = useState("")
  const [age, setAge] = useState("")
  const [passwordlogin, setPasswordlogin] = useState("")
  const [passwordsignin, setPasswordsignin] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  // login user
  const handleLogin = (email, password) => {
    const data = {
      email,
      password
    }
    fetch('http://localhost:8080/login', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json"
      }
    }).then((res) => res.json())
      .then((res) => {
        if (res.token) {
          dispatch(login(res.token))
          navigate('/index')
        }
        if (res.responce == 'error') {
          alert(res.message)
        }
        else {
          alert(res.message)
        }
      })
      .catch((err) => console.log("error in fetch"))
  }

  // register user
  function handleRegister(email, password, age) {
    const data = {
      age,
      email,
      password
    }
    fetch('http://localhost:8080/register', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json"
      }
    }).then((res) => res.json())
      .then((res) => {
        if (res.responce == 'error') {
          alert(res.message)
        }
        handleOpen1();

      })
      .catch((err) => console.log("error in fetch"))
  }
  return (
    <div>
      <div style={{ height: "70px", display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "20px", marginLeft: "30px", fontFamily: "sans-serif" }}>
          <img src="https://tse1.mm.bing.net/th?id=OIP.EN9vozlRwTny3XSfz6iQJQHaHa&pid=Api&P=0" alt="pin-logo" />
          <h3 style={{ color: "#E60023", fontWeight: "600", margin: "25px 0 0 -25px" }}>Pinterest</h3>
        </div>
        <div style={{ display: "flex", gap: "20px", marginRight: "20px", fontFamily: "sans-serif" }}>
          <p style={{ marginTop: "25px" }}>About</p>
          <p style={{ marginTop: "25px" }}>Bussiness</p>
          <p style={{ marginTop: "25px" }}>Blog</p>
          <button onClick={handleOpen1} style={{ borderRadius: "100px", width: "70px", height: "40px", marginTop: "15px", backgroundColor: "#E60023", color: "white", fontSize: "16px", border: "none" }}> Login</button>
          <button onClick={handleOpen2} style={{ borderRadius: "100px", width: "70px", height: "40px", marginTop: "15px", backgroundColor: "#cecece", color: "black", fontSize: "16px", border: "none" }}> Signup</button>
        </div>
      </div>
      <div>
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} style={{ height: "90%", width: "25%", borderRadius: "40px", textAlign: "center", border: "1px solid #cecece" }} >
            <img style={{ width: "50px" }} src="https://tse1.mm.bing.net/th?id=OIP.EN9vozlRwTny3XSfz6iQJQHaHa&pid=Api&P=0" alt="pin-logo" />
            <h1 style={{ fontWeight: "500" }}>Welcome to Pinterest</h1>
            <p>Find new ideas to try</p>


            <div style={{ textAlign: "left", width: "70%", margin: "auto" }}>
              <p>Email</p>
              <input value={emaillogin} onChange={(e) => setEmaillogin(e.target.value)} placeholder='Email' className="inputBox" type="text" />
              <p>Password</p>
              <input value={passwordlogin} onChange={(e) => setPasswordlogin(e.target.value)} placeholder='Password' className="inputBox" type="password" />
            </div>


            <Typography id="modal-modal-title" variant="h6" component="h2">
              <button onClick={() => handleLogin(emaillogin, passwordlogin)} className='butt-login'><p>Log in</p> </button>
            </Typography>
            <br />
            <br />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <Gauth />
            </Typography>
            <br />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <button className='butt-home'><img src="https://tse1.mm.bing.net/th?id=OIP.SQYrUR9VynAj0nnRBYQZfwHaHa&pid=Api&P=0" alt="fb-icon" /> <p>Login with Facebook</p> </button>
            </Typography>
            <br />
            <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ color: "grey", fontSize: "14px" }}>
              By continuing, you agree to Pinterest's <br /> <b>Terms of Service</b> and acknowledge you've read our <br /> <b>Privacy Policy</b>
            </Typography>
          </Box>
        </Modal>


        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} style={{ height: "90%", width: "25%", borderRadius: "40px", textAlign: "center", border: "1px solid #cecece" }} >
            <img style={{ width: "50px", marginTop: "-15x" }} src="https://tse1.mm.bing.net/th?id=OIP.EN9vozlRwTny3XSfz6iQJQHaHa&pid=Api&P=0" alt="pin-logo" />
            <h1 style={{ fontWeight: "500", marginTop: "-10px" }}>Welcome to Pinterest</h1>
            <p>Find new ideas to try</p>


            <div style={{ textAlign: "left", width: "70%", margin: "auto" }}>
              <p>Email</p>
              <input value={emailsignin} onChange={(e) => setEmailsignin(e.target.value)} placeholder='Email' className="inputBox" type="text" />
              <p>Password</p>
              <input value={passwordsignin} onChange={(e) => setPasswordsignin(e.target.value)} placeholder='Password' className="inputBox" type="password" />
              <p>Age</p>
              <input value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' className="inputBox" type="text" />
            </div>


            <Typography id="modal-modal-title" variant="h6" component="h2">
              <button onClick={() => handleRegister(emailsignin, passwordsignin, age)} className='butt-login'><p>Sign up</p> </button>
            </Typography>
            <br />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <Gauth />
            </Typography>
            <br />
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <button className='butt-home'><img src="https://tse1.mm.bing.net/th?id=OIP.SQYrUR9VynAj0nnRBYQZfwHaHa&pid=Api&P=0" alt="fb-icon" /> <p>Continue with Facebook</p> </button>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{ color: "grey", fontSize: "14px" }}>
              By continuing, you agree to Pinterest's <br /> <b>Terms of Service</b> and acknowledge you've read our <br /> <b>Privacy Policy</b>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default Navbar
