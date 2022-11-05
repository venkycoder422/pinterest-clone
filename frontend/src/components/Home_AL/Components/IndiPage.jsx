import { Avatar, Button } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './indiPage.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import ReactPlayer from 'react-player';

const IndiPage = () => {
  const { id } = useParams()
  const [pin, setPin] = React.useState({})
  const user = useSelector(state => state.auth.userData)
  const [comment, setComment] = React.useState();
  const [pins, setPins] = React.useState([]);
  const [isImage, setImage] = React.useState(true);
  const getNewPins = () => {
    fetch(`https://pinterest-clone-server.herokuapp.com/pins`)
      .then(res => res.json())
      .then((res) => { setPins(res.pins) });
    }

  //console.log(user);

  const [len, setLen] = React.useState("")

  function getRandomFloat(min, max, decimal) {
    const str = (Math.random() * (max - min) + min).toFixed(decimal);
    return parseFloat(str)
  }

  const fetchPin = () => {
    console.log(id)
    axios({
      method: "post",
      url: "https://pinterest-clone-server.herokuapp.com/individualpin",
      data: {
        id: id
      }
    }).then((res) => {
      //console.log(res.data.pin);
      setPin(res.data.pin);
      setLen(res.data.comments);
      setImage(checkIsImage(res.data.pin.image));
    })
  }

  React.useEffect(() => {
    fetchPin();
    getNewPins();
  }, [id])

  const postComment = () => {
    const commentData = {
      email: user.email,
      userImg: user.imageUrl,
      comment
    }
    axios({
      method: "patch",
      url: `https://pinterest-clone-server.herokuapp.com/createComment?id=${id}`,
      data: {
        comments: commentData
      }
    }).then((res) => {
      //console.log(res);
      setComment("")
      fetchPin();
    }).catch((err) => {
      //console.log(err);
      alert("Error Happens")
    })
  }


  function checkIsImage(answer) {
    //console.log("getting",answer);
    console.log("succesfull geeting pin url", answer);
    let imgextentions = ["png", "jpg", "svg", "jpeg"];
    for (var i = 0; i < imgextentions.length; i++) {
      if (answer.includes(imgextentions[i])) {
        return true;
      }
    }
    //console.log("video", answer);
    return false;
  }



  return (
    <>
      <Navbar />
      <div>
        <div className='pin_container'>
          <Link to="/index" className='backbutton'><ArrowBackIcon /></Link>
          <div className='div_1'>

            {
              isImage ? <img src={pin.image} alt="pin_image" /> : <ReactPlayer className="video" url={pin.image} playing="true" loop="true" ></ReactPlayer>
            }

          </div>
          <div className='div_2'>
            <div>
              <button className='save_button'>Save</button>
              <h1 className="pin_title">{pin.title}</h1>
              <p className="pin_desc">{pin.description}</p>
              <div className='user_avatar'>
                <div style={{ display: "flex" }}>
                  <Avatar alt="Remy Sharp" src={user.imageUrl} referrerpolicy="no-referrer" />
                  <div className='avatar_detail'>
                    <h4 style={{ marginTop: "0" }}>{user.name}</h4>
                    <p style={{ marginTop: "-15px" }}>{getRandomFloat(1.1, 25.9, 2)}K followers</p>
                  </div>
                </div>
                <button className='follow_user'>Follow</button>
              </div>
            </div>
            <br />
            <div className='pin_comment'>
              <Accordion style={{ border: "0.1px solid #cecece", marginRight: "10px", marginBottom: "22px" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography><h2>{len + " Comments"}</h2></Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {
                      len > 0 ?
                        pin.comments.map((el) => (
                          <>
                            <div style={{ display: "flex", width: "40%", gap: "20px", justifyContent: "space-between" }}>
                              <div><Avatar alt="Remy Sharp" src={el.userImg} /></div>
                              <div style={{ marginTop: "-15px" }}>
                                <h4>{el.email}</h4>
                                <p>{el.comment}</p>
                              </div>
                            </div>
                            <br />
                          </>
                        ))
                        : ""
                    }
                    <div className='comment_input_container'>
                      <Avatar alt="Remy Sharp" src={user.imageUrl} />
                      <input value={comment} onChange={(e) => setComment(e.target.value)} className='comment_input' type="text" placeholder='Add a Comment' />
                      <Button onClick={postComment} variant='contained' color="error">Post</Button>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <HomePage pins={pins} />
    </>
  )
}


export default IndiPage