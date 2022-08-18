import QuestionContainer from "../Questions/QuestionContainer";

import style from "./Card.module.scss";

const Card = () => {
    return (
        <div className={style.card}>
            <QuestionContainer /> 
        </div>
    )


}

export default Card;