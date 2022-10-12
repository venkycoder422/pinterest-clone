import React from 'react';
import styled from 'styled-components';
import PintrestIcon from '../icons/Pinterest.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel';
import { useSelector } from 'react-redux';

// props:{
//     onSubmit: onSearchSubmit()
// }
const Navbar = (props) => {
    const user = useSelector(state => state.auth.userData)
    const [input, setInput] = React.useState("");

    const onSearchSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(input);

    }

    return (
        <NavWrappar>
            <Logo>
                <img src={PintrestIcon}></img>
            </Logo>
            <HomePageButton>
                <Link to="/index"><p>Home</p></Link>
            </HomePageButton>
            <Following>
                <Link to="/pin/todaypins"><p style={{ fontWeight: "400" }}>Today</p></Link>
            </Following>
            <Create>
                <Link to="/pin/create"><p style={{ fontWeight: "400" }}>Create</p></Link>
            </Create>
            <SearchWrapper className='SearchMain'>
                <SearchBarWrapper>

                    <IconButton className='searchdiv'>
                        <SearchIcon className='Search' style={{ marginTop: "12px", marginLeft: "7px" }} />
                    </IconButton>

                    <form>
                        <input type="text" placeholder='Search' onChange={(e) => setInput(e.target.value)}></input>
                        <button type="submit" onClick={onSearchSubmit}></button>
                    </form>
                    <CancelIcon className='Cancel' onClick={() => window.location.reload()} style={{ width: "25px", height: "25px" }} />
                </SearchBarWrapper>
                <DropContent className='Drop'>
                    <IdeasForYou>

                        <p>Ideas for you</p>
                        <div className='IdeasFlexMain'>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/2f/e4/00/2fe40091e0caeb745eab7069528b03c8.jpg"></img>
                                <h5>Maths vocabulary</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/12/69/7e/12697ef1ee7b648d3f3ac71b4c79f8d3.jpg"></img>
                                <h5>Teaching techniques</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/ba/2f/a2/ba2fa28c937da1c797658121be062591.jpg"></img>
                                <h5>Photo editing</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/17/d6/9f/17d69fda85598f127a4232f1700ab2e2.jpg"></img>
                                <h5>Drawing techniques</h5>
                            </div>

                        </div>



                    </IdeasForYou>
                    <Popular>
                        <p>Popular in pinterest</p>

                        <div className='IdeasFlexMain'>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/78/35/aa/7835aa32cb58637496c36e93dcdd0681.jpg"></img>
                                <h5>Ganesh Chathurthi Status</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/48/07/a3/4807a3c7399db01305c85ed3f4e24f38.jpg"></img>
                                <h5>Ganesh papa photo</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/03/84/e3/0384e3992cca30a02b667af82e823c94.jpg"></img>
                                <h5>Baby ganesh</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/80/e3/16/80e3168bf7c67581fb2400973bc90a15.jpg"></img>
                                <h5>Kitchen interior</h5>
                            </div>



                        </div>
                        <div className='IdeasFlexMain'>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/6e/19/ab/6e19abff46703debadcdd1bcc1691bf3.jpg"></img>
                                <h5>Living room design</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/b3/5c/ee/b35cee0eca8133353ede91ba9e939135.jpg"></img>
                                <h5>phone wallpaper</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/2d/67/f9/2d67f9834649b584682ab58606f5a27e.jpg"></img>
                                <h5>White background</h5>
                            </div>
                            <div className='hoverDiv'>
                                <img src="https://i.pinimg.com/236x/e7/13/1e/e7131e068a7ed8a988cffcac602f120d.jpg"></img>
                                <h5>Teachers day cards handmade creative</h5>
                            </div>



                        </div>
                    </Popular>
                </DropContent>

            </SearchWrapper>

            <IconsWrap >

                <Notify className='notify'>
                    <Link to="" ><NotificationsIcon style={{ color: "#767676", width: "30px", height: "30px" }} /></Link>
                    <h6>Notifications</h6>
                </Notify>

                <Notify>
                    <Link to=""><TextsmsRoundedIcon style={{ color: "#767676", width: "30px", height: "30px" }} /></Link>
                    <h6>Messages</h6>
                </Notify>

                <Notify>
                    <Link to="/profile"><img style={{ width: "40px", borderRadius: "100px" }} src={user.imageUrl} alt="" referrerpolicy="no-referrer" /></Link>
                    <h6>Your profile</h6>
                </Notify>

                <Notify>
                    <Link to=""><KeyboardArrowDownIcon style={{ color: "#767676", width: "30px", height: "30px" }} /></Link>
                    <h6>Accounts and more options</h6>
                </Notify>


            </IconsWrap>
        </NavWrappar>

    )
}

const NavWrappar = styled.div`
display:flex;
align-items:center;
height:56px;
padding: 12px 4px 4px 12px;
background-color:white;
width:100%;
// border:1px solid black;
color:black;
margin:0px 0px 100px 0px;
position:fixed;
z-index:2;
top:0px;


`;
const Logo = styled.div`
display:flex;
height:48px;
min-width:3%;
align-items:center;
justify-content:center;
border-radius:24px;
cursor:pointer;
background-color: white;
:hover {
    background-color: #C0C0C0	;
}


    
`;
const HomeButtons = styled.div`
display:flex;
cursor:pointer;
height:48px;
min-width:5%;
align-items:center;
justify-content:center;
border-radius:24px;
`;

const HomePageButton = styled(HomeButtons)`

background-color:rgb(17,17,17);
    a{
        text-decoration:none;
        color:white;
        font-weight: 700;
    }
`;


const Following = styled.div`
    display:flex;
    height:48px;
    min-width:5%;
    align-items:center;
    justify-content:center;
    border-radious:24px;
    cursor:pointer;
    background-color: white;
    border-radius:24px;
    :hover {
        background-color: #C0C0C0	;
    }
        a {
            text-decoration:none;
            color:black;
            font-weight: 700;
        }

        
    ;`
const Create = styled.div`

display:flex;
    height:48px;
    min-width:5%;
    align-items:center;
    justify-content:center;
    border-radious:24px;
    cursor:pointer;
    background-color: white;
    border-radius:24px;
    position:relative;
    z-index:1;
    a {
        text-decoration:none;
        color:black;
        font-weight: 700;
    }
    h6{
        display:none;
    }
    
    :hover h6{
    display:block;
    min-width:100px;
    font-size:16px;
    word-wrap: normal;
    background-color:whitesmoke;
    color:black;
    padding:10px;
    border-radius:5px;
    position:absolute;
    top:50px;
    left:-10px;
    :hover{
        background-color:#C0C0C0;
    }
    
    }
`;
const SearchBarWrapper = styled.div`
display:flex;
`;

const SearchWrapper = styled.div`
    background-color: #efefef;
    display:flex;
    flex-direction:column;
    height:48px;

    width:75%;
    border-radius: 50px;
    border:none;
    padding-left:10px;
    padding-right:10px;
    .Cancel{
        display:none;
        margin:auto;
    }
    .Drop{
        display:none;
        margin:auto;
    }
    .searchdiv{
        display:block;
        
        }
        
    form {
        display:flex;
        column-span:1;
        width:100%;
       //background-color:yellow;
    }
    
   

    :has(input:focus){
        padding:2px;
        border:5px solid #4a8ad4;
        width:100%;
        height:100%;
        
        
        .searchdiv{
            display:none;
        }
        .Drop{
            display:block;
            margin-top:14px;
        }
        .Cancel{
            display:block;
          
            margin:auto;
        }
       
    }
    

    form>input {
        background-color: transparent;
        border:none;
        width:100%;
        height:48px;
        
        margin-left:5px;
        font-size:20px;
        outline:none;

        
        //border:1px solid blue;
    }
    
    form > button{
        display:none;
    }
    

`;
const Iconsstyling = styled.div`
    display:flex;
    justify-content:space-evenly;
    padding:1px;
    width:15%;
    align-items:center;
    cursor:pointer;
    // border:1px solid red;
   
    
`;
const IconsWrap = styled(Iconsstyling)`
position:relative;
z-index:1;

div{
// border:1px solid yellow;
display:flex;
height:48px;
min-width:48px;
align-items:center;
justify-content:space-evenly;
border-radius:50px;
cursor:pointer;
background-color: white;

:hover {
    background-color: #C0C0C0;
   
} 

}
`;
const IconButton = styled.div`

   
`;

const DropContent = styled.div`
margin:26px 0px 0px 20px;
background-color:white;
position:relative;
z-index:1;
border-bottom-right-radius:20px;
border-bottom-left-radius:20px;

`
const IdeasForYou = styled.div`
margin:10px;
.hoverDiv{
    position:relative;
    width:200px;
    height:100px;
    color:white;
    text-align:center;
    margin:auto;
   
    margin:0px 2px 0px 2px; 
    img{
        width:100%;
        height:100%;
        filter:brightness(70%);
        border-radius:16px;
        padding:3px;
        :hover{
            filter:brightness(50%);
        }
    }
   
    h5{
        text-align:center;
        text-wrap:wrap;
        position:absolute;
        top:40px;
        left:50px;
        

    }
   
   
}
.IdeasFlexMain{
    display:flex;
    gap:10px;
  
}


    

.OverText{
    position:absolute;
    top:0;
    color:white;
}
`;
//Search bar hover Popular div 
const Popular = styled(IdeasForYou)`


.hoverDiv{
    position:relative;
    width:200px;
    height:100px;
    color:white;
    text-align:center;
    margin:auto;
    margin:3px; 
    img{
        width:100%;
        height:100%;
        
          filter:brightness(70%);
        
        border-radius:16px;
    }
   
    h5{
        position:absolute;
        top:40px;
        left:50px;
        

    }
    
   
}



`;

//Icons hover div css

const Notify = styled.div`
display:flex;
flex-direction:column;
position:relative;
tetx-align:center;

h6{
    display:none;
}

:hover h6{
display:block;
min-width:60px;
word-wrap: normal;
background-color:black;
color:white;
padding:8px;
border-radius:5px;
position:absolute;
top:50px;

}
`;

const Comment = styled.div``;

const User = styled.div``;

const DownArrow = styled.div``;

export default Navbar

