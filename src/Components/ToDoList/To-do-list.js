import { useState } from 'react'

export function ToDoList() {

    const [data, setData] = useState([])
    const [value, setValue] = useState('')

    function taskAdding() {
        setData([...data, value])
        setValue('');
        console.log(value)
    }


    function handleChange(event) {
        setValue(event.target.value)
    }


    // adding delete function 


    function handleDelete(index) {
        // const updatedValues = ([...data]);
        // updatedValues.splice(index, 1);
        // setData(updatedValues)

        const updatedValues = data.filter((element, id) => {
            return index !== id;
        })

        setData(updatedValues);
    }


    return (
        <>
            <h1>To Do List</h1>
            <input type="text" onChange={handleChange} placeholder='Add new user' />
            <button onClick={taskAdding}>Submit</button>
            <div>
                {
                    data.map((figure, index) => {
                        return (
                            <>
                                <p key={index}>
                                    <span style={{
                                        margin: 'auto',
                                        padding: '0px 12px',
                                    }}>{figure}</span>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                    {/* <button onClick={handleDelete}>Delete</button> */}
                                </p>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}