import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import './Home_BL.css'

const Home_BL = () => {
  const user = useSelector(state => state.auth.userData)
  return (
    <div>
      <Navbar />
      <div className="home_container">
        <div className="heading">
          <span className="text">Get your Next</span>
          <span className="text" style={{ color: "red" }}>
            home decor idea
          </span>
          <div className="wrapper">
            <div className="offset">
              <h2 className="text animate-after"> chai time snacks idea</h2>
            </div>
            <div className="offset">
              <h2 className="text animate-after">home decor idea</h2>
            </div>
            <div className="offset">
              <h2 className="text animate-after">outfit idea</h2>
            </div>
            <div className="offset">
              <h2 className="text  animate-after">DIY idea</h2>
            </div>
          </div>
          <div className="grid_container">
            <div className="grid">
              <div className="column animate-after">
                <div className="item">
                  <img src='https://i.pinimg.com/236x/27/13/87/271387cba013cebc62a2ded6036b7da5.jpg' alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src='https://i.pinimg.com/564x/db/3e/db/db3edba531649c228318b2c756a27975.jpg' alt="" />
                </div>
                <div className="item">
                  <img src='https://i.pinimg.com/564x/db/3e/db/db3edba531649c228318b2c756a27975.jpg' alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src='https://i.pinimg.com/736x/9c/04/d7/9c04d7e8250db42e1260a1c2b6ab7233.jpg' alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src='https://i.pinimg.com/564x/52/2c/74/522c74e4b62a5562a28232546f003426.jpg' alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src='https://i.pinimg.com/564x/37/ff/5d/37ff5d5556384434420cf4875cf9e0d0.jpg' alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src='https://i.pinimg.com/564x/b8/d5/15/b8d515fd350f305e9fb47d109d4cd39e.jpg' alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src='https://i.pinimg.com/564x/84/da/c7/84dac744bf1efd4a56988f39c26f4ed8.jpg' alt="" />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="column animate-after">
                <div className="item">
                  <img src='https://i.pinimg.com/564x/f2/91/48/f2914851929bfe1e1dfc92b8f2e706d8.jpg' alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src='https://i.pinimg.com/564x/f2/91/48/f2914851929bfe1e1dfc92b8f2e706d8.jpg' alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src='https://i.pinimg.com/564x/72/3a/0f/723a0f3f65a89fa89f5830bd5d6d48af.jpg' alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src='https://i.pinimg.com/564x/29/ee/6f/29ee6f644ef378a9786b871a093eb4eb.jpg' alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src='https://i.pinimg.com/736x/62/21/a5/6221a5b3ea8d148edfad815e2dca4f4c.jpg' alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src='https://i.pinimg.com/736x/a5/e8/d3/a5e8d3dd89bee0450e2a6ea5fc1ded57.jpg' alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src="https://i.pinimg.com/736x/7c/2c/f2/7c2cf2a20d461d2d52bfe7185986bd80.jpg" alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src="https://i.pinimg.com/564x/e0/e3/e4/e0e3e4aa023fc7851661efb552741ec1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="column animate-after">
                <div className="item">
                  <img src="https://i.pinimg.com/236x/09/04/69/090469f7f71398dc7117f8e23a4085ee.jpg" alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src="https://i.pinimg.com/236x/3f/87/96/3f8796c808814c0d471eedda81d6cbe6.jpg" alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src="https://i.pinimg.com/236x/87/70/04/87700416c7a99ba35151a05714e2bbe7.jpg" alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src="https://i.pinimg.com/236x/47/21/fc/4721fc73dc3125e03a36ab1585ca15eb.jpg" alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src="https://i.pinimg.com/236x/9c/00/fa/9c00fac15ae576b4f76c156bd7e686f2.jpg" alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src="https://i.pinimg.com/564x/a3/88/be/a388be59d461811a9c859a2bad997088.jpg" alt="" />
                </div>
              </div>
              <div className="column animate-after">
                <div className="item">
                  <img src="https://i.pinimg.com/236x/23/00/21/2300219d75dc750932206637c0c43922.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="grid">
              <div className="column">
                <div className="item">
                  <img src="https://i.pinimg.com/236x/51/bd/e7/51bde72950c4e6fce62a2a947a4e6b36.jpg" alt="" />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <img src="https://i.pinimg.com/236x/57/11/b5/5711b567c70b3aa3495538a5d1474738.jpg" alt="" />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <img src="https://i.pinimg.com/236x/78/84/ec/7884ec7eb7d4eecb3ede4b80c5ac7f09.jpg" alt="" />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <img src="https://i.pinimg.com/236x/15/02/0d/15020d10f40a8f1fdc8acf6c3b6e3d5c.jpg" alt="" />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <img src="https://i.pinimg.com/236x/20/8b/ca/208bcaf3bc08c7f5cbec977aa9879c63.jpg" alt="" />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <img src="https://i.pinimg.com/236x/81/fb/46/81fb466866b35774acc40b33e0a97846.jpg" alt="" />
                </div>
              </div>
              <div className="column">
                <div className="item">
                  <img src="https://i.pinimg.com/236x/70/3e/26/703e26c8f8a8315d03c00c7244e414b3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div style={{ width: "100%" }}><img style={{ width: "100%" }} src="./img_bl1.png" alt="home_img" /></div>
      <div style={{ width: "100%" }}><img style={{ width: "100%" }} src="./img_bl2.png" alt="home_img" /></div>
      <div style={{ width: "100%" }}><img style={{ width: "100%" }} src="./img_bl3.png" alt="home_img" /></div>
      <div style={{ width: "100%" }}><img style={{ width: "100%" }} src="./img_bl4.png" alt="home_img" /></div>
    </div>
  )
}

export default Home_BL
