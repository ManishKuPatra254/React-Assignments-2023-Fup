import './Nameupdate.css'
import { useState } from 'react';

export function NameUpdater() {

    const [name, setName] = useState()
    // console.log(name);

    const [index, setIndex] = useState();

    function handleName(event) {
        setName(event.target.value);
    }

    function handleButtonSubmit(event) {
        event.preventDefault();
        setIndex(name);
    }

    return (
        <>
            <div className='form_design'>
                <h1>Hi my name is {index}</h1>
                <form onSubmit={handleButtonSubmit}>

                    <input type="text"
                        onChange={handleName}
                        autoComplete='off'
                        placeholder='Enter the name'
                    />
                    <br />
                    <button>Submit</button>

                </form>

            </div>

        </>
    )
}
