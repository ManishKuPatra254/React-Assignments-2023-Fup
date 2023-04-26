import './Counter.css'
import { useState } from "react";
export function CounterValue() {

    const [num, setNum] = useState(0);

    function additionOne() {
        setNum(num + 1);
    }


    function subtractionOne() {
        // setNum(num - 1);
        if (num > 0) {
            setNum(num - 1);
        }
    }

    return (
        <div>
            <h1>{num}</h1>

            <button className="btn1" onClick={additionOne}>Click To Add 1</button>

            <button className="btn1" onClick={subtractionOne}>Click To Sub 1</button>
        </div>
    );
}