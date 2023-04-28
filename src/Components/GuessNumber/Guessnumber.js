import { useState } from 'react';
import './Guessnumber.css';

export function Guessnumber() {

    const [initial, setInitial] = useState('');
    const [luckynumber, setLuckynumber] = useState(23);
    const [count, setCount] = useState(0);


    function handleChange(event) {
        setInitial(event.target.value);
    }


    function handleClickupdate() {
        const new_set = parseInt(initial)
        setInitial('');
        setCount(count + 1);
        if (new_set < 0 || new_set > 30) {
            alert(`Please enter the value between 1 to 30`)
            return
        }

        if (new_set === luckynumber) {
            alert(`Congratulations you guessed the right number in ${count + 1} attempts`);
            setLuckynumber();
            setCount(0);
        }

        else if (new_set > luckynumber) {
            alert(`You have guessed bigger number`);
        }
        else {
            alert(`You have guessed smaller number`);
        }
    }

    return (
        <>
            <div className='whole-elements'>
                <h1>GUESS THE LUCKY NUMBER GAME BETWEEN 1 - 30</h1>
                <label htmlFor="">Enter Your Number</label>
                <input type="number" placeholder='Guess the number' onChange={handleChange} className='input_field' />
                <button onClick={handleClickupdate} value='20' type='submit'>Match Number</button>
            </div>
        </>
    )
}