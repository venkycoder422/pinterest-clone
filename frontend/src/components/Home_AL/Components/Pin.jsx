import React from 'react'
import styled from "styled-components";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom';
// import './pin.css'
import HoverVideoPlayer from 'react-hover-video-player';
import ReactPlayer from 'react-player'
import AlertDialogSlide from "./SlideUp"
import { NavLink } from "react-router-dom";
const Pin = (props) => {
    console.log("ISV", props.isV);
    // function Video(props) {


    //     if (props.isV) {
    //         console.log("img as",props.isV);
    //         return <img className="img" src={props.url} alt="pin"></img>
    //     }
    //     else {
    //         console.log("video as",props.isV);
    //         return <ReactPlayer className="img" url={props.url}  width="236px" height="360px" />

    //     }
    // }

    const [click, setClick] = React.useState(false);

    const [slide, setslide] = React.useState(click);

    return (
        <Wrapper>
            <Container className='pin-container'>
                <div className='ImageWrapper'>
                    <div>

                        {/* <img className="img" src={props.url} alt="pin"></img> */}

                        {
                            props.isV ? <Link to={`/pin/${props.id}`}><img className="img" src={props.url} alt="pin"></img></Link> : <ReactPlayer className="video" url={props.url} playing="true" muted loop="true" width="236px" height="360px" style={{ width: "100%", height: "100%", objectFit: "fill" }}></ReactPlayer>
                        }
                        {/* <Video isV={props.isV} />  */}

                        {/* <HoverVideoPlayer className="img" videoSrc="https://www.youtube.com/watch?v=ysz5S6PUM-U" controls /> */}
                    </div>
                    {/* <Imagediv className="Image" image={props.url}> */}
                    <Link to={`/pin/${props.id}`}> <div className="IconsHideShow">
                        <div className="div1">
                            <Create>
                                <a href='/'>Color</a>
                                <KeyboardArrowDownIcon style={{ marginTop: "7px" }} />
                            </Create>
                            <Save className='save' save={click} onClick={() => { setClick(!click); setslide(true) }}>{click ? 'Saved' : 'Save'}</Save>

                        </div>

                        <IconsWrap className="div2">
                            <div><MoreHorizOutlinedIcon /></div>
                            <div><FileUploadOutlinedIcon /></div>
                        </IconsWrap>
                    </div></Link>
                    {/* </Imagediv> */}

                </div>

                {/* <p>{props.title}</p> */}
            </Container>

        </Wrapper >


    )
}



const Wrapper = styled.div`
display:inline-flex;
z-index:32;
padding:0px 6px 16px;
`;

const Container = styled.div`
display:flex;
align-items: center;
flex-direction:column;
box-sizing:border-box;
cursor:pointer;
width:236px;
position:relative;

.ImageWrapper{
width:100%;
height:100%;
}
iframe{
    display:flex;
    width:100%;
    // border:1px solid yellow;
    object-fit:cover;
    border-radius:16px;
    cursor:zoom-in;
    overflow:hidden;
    autoplay:1;
    
}
.img{
    display:flex;
    width:100%;
    // border:1px solid yellow;
    object-fit:cover;
    border-radius:16px;
    cursor:zoom-in;
    overflow:display;
    // height:100%;
    // margin-left:-50px;
   
}

video{
    object-fit:fill;
    border-radius:16px;
    width:100%;
    height:100%;
    
    
}
.div1{
    display:flex;
    color:white;
    justify-content:space-between;
}

.div2{
    display:flex;
   
    flex-direction:row-reverse;
}

.IconsHideShow{
    display:none;
    width:220px;
    height:95%;
    
}
:hover .IconsHideShow{
    display: flex;
    position: absolute;
    top: 0;
    
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 12px 40px 12px;
}

:hover img,video{
   
        filter: brightness(70%);
    
}


`;


//const Imagediv = styled.div`
//background-image : url(${props => props.image});

// width: 252px;

// cursor: zoom-in;
// border-radius:16px;
// object-fit:cover;





//`;

const Create = styled.div`
display:flex;
    width:60px;
    height:38px;
    align-items:center;
    border-radious:24px;
    cursor:pointer;
    border-radius:24px;
    color:white;
    a {
        text-decoration:none;
        color:white;
        font-weight: 700;
    }
`;

const Save = styled.button`
width:auto;
height:auto;
background-color:${props => props.save ? "black" : "#e60023"};
color:white;
border-radius:25px;
outline:none;
border:none;
padding:15px 12px;
font-size:17px;
:hover{
    background-color:${props => props.save ? "black" : "#ad081b"};
}

`

const IconsWrap = styled.div`

div{
display:flex;
height:35px;
min-width:35px;
align-items:center;
justify-content:center;
border-radius:25px;
cursor:pointer;
margin:0px 3px 0px 3px;
background-color: white;
:hover {
    background-color: #C0C0C5	;
}
}
`;



export default Pin;