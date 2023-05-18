import './Main-quiz.css';
import { questionsData } from '../Quiz-Questions/Quiz-questions'
import { useState, useEffect } from 'react';
import { QuizScoreDisplayResult } from '../Quiz-Score-Display/Quiz-display';
export function MainQuizRender() {

    // to see in which question number we are present so we use a useState here 

    const [currentQuestion, setCurrentQuestion] = useState(0);

    // for maintaining score 

    const [forMaintainingScore, setMaintainingScore] = useState(0);

    // option cliked useState 

    const [clicked, setClicked] = useState(0);

    // to display the marks obtained at last 

    const [displayResult, setDisplayResult] = useState(false)

    const [remainingTime, setRemainingTime] = useState(600);


    function functionChange() {
        updateScore();
        setCurrentQuestion(currentQuestion + 1);
        if (currentQuestion < questionsData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClicked(0);
        }
        else {
            setDisplayResult(true)
        }
    }


    function updateScore() {
        if (clicked === questionsData[currentQuestion].answer) {
            setMaintainingScore(forMaintainingScore + 2)
        }
        if (forMaintainingScore >= 12) {
            alert('You have passed the test');
        }
    }


    // timer section 

    useEffect(() => {
        // Timer countdown
        const timer = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 1);
        }, 1000);

        // Clear timer when the component is unmounted
        return () => clearInterval(timer);
    }, []);


    useEffect(() => {
        if (remainingTime === 0) {
            setDisplayResult(true);
        }
    }, [remainingTime]);


    // restart the test function 

    function restartTheTest() {
        setDisplayResult(false)
        setRemainingTime(600);
        setMaintainingScore(0)
        setClicked(0);
        setCurrentQuestion(0)
    }

    return (

        <>
            <div className="countdown_timer">Time Remaining: {remainingTime}s</div>
            <h1 className='heading'>Quiz Game</h1>
            <div className='main_container'>
                {displayResult ? (
                    <QuizScoreDisplayResult

                        marks_obtained={forMaintainingScore}
                        total_marks={questionsData.length * 2}
                        restart_the_game={restartTheTest} />
                ) : (

                    <>
                        <div className='questions_1'>
                            <p className='questions_number_render_all'>{currentQuestion + 1}.</p>
                            <p className='questions_name_all'>{questionsData[currentQuestion].Question}</p>
                        </div>
                        <div className='options_part'>
                            {
                                questionsData[currentQuestion].Options.map((ele, index) => {
                                    return (
                                        <>
                                            <button className={`btn1 ${clicked === index + 1 ? 'checked' : null}`}
                                                key={index}
                                                onClick={() => setClicked(index + 1)}
                                            >
                                                {ele}
                                            </button>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <input type="button" className='next_btn1' value='Next' onClick={functionChange} />

                    </>
                )}
            </div>
        </>
    )
}


