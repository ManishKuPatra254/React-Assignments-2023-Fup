
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodoStatus } from '../Update'
import { useState } from 'react';

export function TodoListMainApp() {
    const [todoName, setTodoName] = useState('');
    const todoList = useSelector(state => state.todo);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (todoName.trim()) {
            const newTodo = {
                name: todoName,
                id: Date.now().toString(),
                status: 'pending',
            };
            dispatch(addTodo(newTodo));
            setTodoName('');
        }
    };

    const handleToggleTodo = (id, status) => {
        const newStatus = status === 'pending' ? 'completed' : 'pending';
        dispatch(toggleTodoStatus({ id, status: newStatus }));
    };

    return (
        <div>
            <input
                placeholder='Enter the name of the user'
                type="text"
                value={todoName}
                onChange={e => setTodoName(e.target.value)}
                style={{
                    display: 'block', margin: 'auto', width: '50%', height: '5vh',
                    marginTop: '2rem', padding: '.4rem'
                }}
            />
            <button onClick={handleAddTodo}
                style={{
                    backgroundColor: 'teal',
                    border: 'none',
                    width: '20vw',
                    margin: 'auto',
                    marginTop: '1rem',
                    color: 'white',
                    padding: '.4rem',
                    borderRadius: '.5rem',
                    height: '6vh',
                    cursor: 'pointer'
                }}>Add </button>

            {todoList.map(final => (
                <p key={final.id}
                    style={{
                        display: 'block',
                        fontSize: '20px',
                        margin: 'auto',
                        fontFamily: 'monospace'
                    }}>
                    <hr />
                    {final.name} - {final.status}
                    <button onClick={() => handleToggleTodo(final.id, final.status)}
                        style={{
                            backgroundColor: 'crimson',
                            border: 'none',
                            width: '15vw',
                            margin: 'auto',
                            marginTop: '1rem',
                            color: 'white',
                            padding: '.5rem',
                            borderRadius: '.3rem',
                            height: 'auto',
                            cursor: 'pointer',
                            fontSize: '15px',
                        }}>
                        Click
                    </button>
                </p>
            ))}

        </div>
    );
};



