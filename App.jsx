import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';


function App() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');

    const increment = () => {
        if (count < 10) {
            setCount(count + 1);
            setMessage('');
        } else {
            setMessage('HA ALCANZADO EL VALOR MÁXIMO DE 10!');
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
            setMessage('');
        }
    };

    const reset = () => {
        setCount(0);
        setMessage('');
    };

    return (
        <div className="App">
            <div className="counter-container">

                <div className={`counter-box ${count === 10 ? 'shake' : ''}`}
                >
                    <h1> {count}</h1>

                    <Button onClick={increment}>Incrementar</Button>
                    <Button onClick={decrement}>Decrementar</Button>
                    <Button onClick={reset}>Reiniciar</Button>

                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    );
}

export default App;
