import QuestionContainer from "../Questions/QuestionContainer";
import Timer from "../Timer/Timer";

import style from "./Card.module.scss";

const Card = () => {
    return (
        <div className={style.card}>
            <Timer/>
            <QuestionContainer /> 
        </div>
    )


}

export default Card;