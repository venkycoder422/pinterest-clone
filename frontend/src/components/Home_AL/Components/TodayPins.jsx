import React from 'react'
import today1 from "./Images/today1.png"
import today2 from "./Images/today2.png"
import today3 from "./Images/today3.png"
import today4 from "./Images/today4.png"
import Navbar from './Navbar'

export const TodayPins = () => {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1>Today's Inspiration 😎</h1>
        <img src={today1} alt="today_photo" />
        <h1>4 September 2022</h1>
        <img src={today2} alt="today_photo" />
        <h1>3 September 2022</h1>
        <img src={today3} alt="today_photo" />
        <h1>2 September 2022</h1>
        <img src={today4} alt="today_photo" />
      </div>
    </>
  )
}


