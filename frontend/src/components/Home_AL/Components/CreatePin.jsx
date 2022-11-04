import React from 'react'
import { useState } from 'react'
import prvImage from '../Images/Screenshot 2022-09-01 131258.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import axios from 'axios';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

export const CreatePin = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2c239f38241791.5759f8a7dd956.gif");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const user = useSelector(state => state.auth.userData)
  const [isImage,setImage] = useState(true);
  const postPin = () => {
    console.log(title);
    console.log(description);
    console.log(preview);
    
    if (!title || !description || !preview) {
      return alert("Error");
    }
    axios({
      method: "post",
      url: "https://pinterest-clone-server.herokuapp.com/createpin",
      data: {
        title,
        description,
        image: preview,
        email: user.email,
        avatar: user.imageUrl
      }
    }).then(() => {
      alert("Pin Created");
      navigate("/index");
      
    })
  }
  
  console.log("iscorrect",isImage);

  function checkImage(answer) {
  

    //console.log("getting",answer);
    console.log("succesfull geeting pin url", answer);
    let imgextentions = ["png", "jpg", "svg", "jpeg"];
    for (var i = 0; i < imgextentions.length; i++) {
    if(answer.includes(imgextentions[i])){
      return true;
    }
    }
    //console.log("video", answer);
    return false;
  }


  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#cecece", width: "100%", height: "auto", paddingBottom: "70px", paddingTop: "70px", marginTop: "50px" }}>
        <div style={{ backgroundColor: "white", width: "60%", margin: "auto", borderRadius: "10px", height: "600px", padding: "50px" }}>
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <button onClick={postPin} style={{ border: "2px solid red", backgroundColor: "red", color: "white", borderTopRightRadius: "7px", borderBottomRightRadius: "7px", fontWeight: "bold", fontSize: "14px" }}>Save</button>
            <select style={{ padding: "10px", paddingRight: "70px", backgroundColor: "#e8e5e5", borderRadius: "7px", borderTopRightRadius: "0px", borderBottomRightRadius: "0px", cursor: "pointer" }}>
              
            </select>
          </div>
          <div style={{ display: "flex", padding: "20px" }}>
            <div>
              {
                isImage? <img style={{ borderRadius: "10px", width: "330px", height: "450px" }} src={preview} alt="" /> : <ReactPlayer className="video" width="490px" height="100%" url={preview} playing="true" light loop="true"></ReactPlayer>
              }<br/>
              <input value={link} onChange={(e) => { setLink(e.target.value)}} style={{ marginTop: "20px", padding: "20px", borderRadius: "13px", border: "5px solid #cecece", paddingRight: "60px" }} type="text" placeholder='Enter Website' />
              <button onClick={() => {setImage(checkImage(link)); setPreview(link); setLink(""); }} style={{ padding: "15px", border: "5px solid white", borderRadius: "10px", cursor: "pointer" }}>{<KeyboardArrowRightIcon />}</button>
            </div>
            <div style={{ padding: "20px" }}>
              <input value={title} onChange={(e) => { setTitle(e.target.value) }} style={{ fontSize: "30px", fontWeight: "bold", border: "none", borderBottom: "1px solid #cecece", padding: "20px", paddingRight: "0px" }} type="text" placeholder='Add Your Title' />
              <div style={{ display: "flex", marginTop: "50px" }}>
                <img style={{ borderRadius: "100px", width: "70px" }} src={user.imageUrl} alt="" />
                <h4 style={{ marginLeft: "30px" }}>{user.name}</h4>
              </div>
              <input value={description} onChange={(e) => { setDescription(e.target.value) }} style={{ fontSize: "15px", fontWeight: "bold", border: "none", borderBottom: "1px solid #cecece", padding: "20px", paddingRight: "30px", width: "90%", marginTop: "40px" }} type="text" placeholder='Tell everyone what your pin is about' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
