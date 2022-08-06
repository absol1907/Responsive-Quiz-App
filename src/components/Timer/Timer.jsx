import style from "./Timer.module.scss";

import { useState, useEffect} from "react";


const Timer = () => {

    const [seconds, setSeconds] = useState(10);

    useEffect(() => {
        let interval = null;
        interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
          }, 1000);

        if (seconds == 0) {
            setSeconds(10);
        }

        return () => clearInterval(interval);
        }, [seconds]);


    
      return (
        <div className={style.timer}>
          <div>
         {seconds}s
          </div>
        </div>
      );
    


}

export default Timer;