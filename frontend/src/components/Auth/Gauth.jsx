import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import { login } from '../../Redux/Auth/action'
import './Gauth.css'
import { useNavigate } from 'react-router-dom'

export default function Gauth() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const clientId = "490174809580-66dq2meojcgpga5u8hq6pj08e6fnl75k.apps.googleusercontent.com"

  const onLoginSuccess = (response) => {
    console.log("loginSuccess", response.profileObj);
    dispatch(login(response.profileObj));
    navigate("/index");
  }
  const onFailureSuccess = (response) => {
    console.log("fail sucess", response)

  }

  return (
    <div>
      <GoogleLogin
        render={(renderProps) => (
          <button
            className="gbutton"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <img
              className="glogo"
              src="https://tse1.mm.bing.net/th?id=OIP._LotbG1SgjcwdzpQ4pBu7QHaHa&pid=Api&P=0"
              alt=""
            />
            <p> Continue with Google</p>
          </button>
        )}
        style={{ width: "100%" }}
        clientId={clientId}
        buttonText="Continue with Google"
        onSuccess={onLoginSuccess}
        onFailure={onFailureSuccess}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  )
}
