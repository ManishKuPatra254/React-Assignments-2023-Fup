
import './Quiz-display.css'

export function QuizScoreDisplayResult(props) {
    return (
        <>
            <div className='marks_display'>
                Marks Obtained : {props.marks_obtained}
                <div>
                    Total Marks : {props.total_marks}
                </div>
            </div>

            <button onClick={props.restart_the_game} className='quiz_display_1_result_value'>Restart The Game</button>
        </>
    )
}

