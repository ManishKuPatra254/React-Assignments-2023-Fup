import './ShowFile.css'
import { useRef } from 'react';

export function Pickthefile() {

    const fileInputRef = useRef(null);


    function handleButtonClick() {
        fileInputRef.current.click();
        // console.log(fileInputRef)
    }


    return (
        <div className='file-picker'>
            Choose the file <input type="file" ref={fileInputRef} />
            <button onClick={handleButtonClick} >Pick the file</button>
        </div>
    )
}