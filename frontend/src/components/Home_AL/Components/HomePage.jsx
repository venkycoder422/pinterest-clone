
import React from 'react'
import styled from "styled-components";
import Pin from './Pin';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const HomePage = (props) => {
  let { pins } = props;
  return (
    <Wrapper>
      <Container>

        {

          pins?.map((data, index) => {
            let urls;
            let title = data.title;
            let isVedio = false;
            let imgextentions = ["png","jpg","svg","jpeg"];
            urls=data.image;
            for(var i=0; i<imgextentions.length; i++){
              if(data.image.includes(imgextentions[i])){
                
                isVedio=true;
                urls = data.image;
                
              }
              
              
            }
           
            
              ///console.log("video",urls);
            
            return <Pin key={index} url={urls} title={title} isV={isVedio} save={data.save} id={data._id} />
          })

        }

      </Container>
    </Wrapper>
  )
};


const Wrapper = styled.div`
background-color:white;
display:flex;
width:100%;
height:auto;
margin-top:35px;
justify-content: center;
flex-wrap: wrap;
`;

const Container = styled.div`
background-color:white;
column-count:6;
height:100%;
column-gap:4px;
margin:0 auto;
margin: 60px auto;
`;

export default HomePage;
