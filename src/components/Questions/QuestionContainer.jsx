import { useState } from "react";
import Questions from "../Data/CountryCapital.json"

import style from "./QuestionContainer.module.scss"

const QuestionContainer = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			alert("Correct Answer")
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < Questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	const handleResetButton = () => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
	};

	

    return (
        <div className={style.QuestionContainer}>
			{showScore ? (
				<div className={style.QuestionContainer__scoreSection}>
					You scored {score} out of {Questions.length}
					<button  className= {style.button} onClick={() => handleResetButton()}>Play Again!</button>
				</div>
			) : (
				<div>
					<div className={style.QuestionContainer__questionSection}>
						<div className={style.QuestionContainer__questionCount}>
							<span>Question {currentQuestion + 1}</span>/{Questions.length}
						</div>
						<div className={style.QuestionContainer__questionText}>{Questions[currentQuestion].questionText}</div>
					</div>
					<div className={style.QuestionContainer__answerSection}>
						{Questions[currentQuestion].answerOptions.map((answerOption) => (
							<button  className= {style.button} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</div>
			)
			}
		</div>
    )
}

export default QuestionContainer;