import { useState } from "react";

import Card from "../../components/Card/Card";
import style from "./LandingPage.module.scss"

const LandingPage = () => {

    const[landingPage,setLandingPage] = useState(true)

    const play = () => {
        setLandingPage(false)
    }
    
    
    return(
        <div className={style.LandingPage}>
            {landingPage ? (
            <div>
            <h1 className={style.textColor}>Welcome to Responsive Quiz App</h1>
            <button className={style.button} onClick={play}>Start</button>
            </div>
            ) : (
            <Card/>
            )}
        </div>
    )
}

export default LandingPage;