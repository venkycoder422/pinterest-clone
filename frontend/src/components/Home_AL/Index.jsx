import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
// import { TodayPins } from './Components/TodayPins';


function Index() {
    const [pins, setPins] = React.useState([]);


    const getNewPins = () => {
        fetch(`https://pinterest-clone-server.onrender.com/pins`)
            .then(res => res.json())
            .then((res) => { setPins(res.pins) });
    }

    useEffect(() => {
        getNewPins()
    }, []);


    const getImages = async (term) => {
        return fetch(`https://pinterest-clone-server.onrender.com/search?q=${term}`)
            .then(res => res.json())
            .then((res) => { setPins(res.pins) });
    }

    const onSearchSubmit = (target) => {
        getImages(target).then((res) => {
            let results = res;
            results.sort(function (a, b) {
                return 0.5 - Math.random();
            });
            setPins(results)
        });

    }




    //console.log(pins);
    // onSearchSubmit("Maths");
    return (
        <>
            <Navbar onSubmit={onSearchSubmit} />
            <Routes>
                <Route path="/" element={<HomePage pins={pins} />}></Route>
            </Routes>

        </>
    );
}

export default Index;