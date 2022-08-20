import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"

import About from "../../pages/About/About";
import GameSettings from "../../pages/GameSettings/GameSettings";
import LandingPage from "../../pages/Landing Page/LandingPage"
import Leaderboard from "../../pages/Leaderboard/Leaderboard";
import P404 from "../../pages/P404/P404"

const Router = () => {

    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Navigate to ="/home" replace/>}></Route>


                    <Route path="/home" element={<LandingPage/>}></Route>
        

                    <Route path="/gamesettings" element={<GameSettings/>}></Route>
          

                    <Route path="/about" element={<About/>}></Route>
               

                    <Route path="/leaderboard" element={<Leaderboard/>}></Route>
               

                    <Route path="*" element={<P404/>}></Route>
                </Routes>
            
            </BrowserRouter>
        </div>
    )



}
export default Router;