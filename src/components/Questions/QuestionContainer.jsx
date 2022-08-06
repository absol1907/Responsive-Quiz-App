import { useState } from "react";
import Questions from "../Data/CountryCapital.json"

import style from "./QuestionContainer.module.scss"

const QuestionContainer = () => {

	const getRandomQuestion = (range,count) => {
	
		let nums = new Set();
		while (nums.size < count) {
			nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
		}
		
		return [...nums][0];
	}

	const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion(20,5));
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [count, setCount] = useState(1);
	
	
	const handleTimer = () => {

		if ({$seconds} == 0) {
			setShowScore(true);
		}
	}
	
	
	const handleAnswerOptionClick = (isCorrect) => {

		if (isCorrect) {
			alert("Correct Answer")
			setScore(score + 1);
		}
		const nextQuestions = getRandomQuestion(20,10);
		if (count < 10) {
			setCurrentQuestion(nextQuestions);
			setCount(count + 1)
		}
		else {
			setShowScore(true);
		} 
	};
	const handleResetButton = () => {
		setCurrentQuestion(getRandomQuestion(20,5));
		setShowScore(false);
		setScore(0);
		setCount(1);
	};
	

    return (
        <div className={style.QuestionContainer}>
			{showScore ? (
				<div className={style.QuestionContainer__scoreSection}>
					You scored {score} out of {10}
					<button  className= {style.button} onClick={() => handleResetButton()}>Play Again!</button>
				</div>
			) : (
				<div>
					<div className={style.QuestionContainer__questionSection}>
						<div className={style.QuestionContainer__questionCount}>
							<span>Question {count}</span>/{10}
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