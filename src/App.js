import { useSelector, useDispatch } from 'react-redux';
import { addSquare, removeSquareAsync } from './store/slices/squareSlice'
import React, { useState } from "react";
import './App.css'

const App = () => {
    const squares = useSelector(state => state.square.squares);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false); // Новое состояние для отслеживания выполнения анимации

    const addSquareHandler = () => {
        if (!loading) {
            setLoading(true);
            dispatch(addSquare());
            setTimeout(() => setLoading(false), 550); // Установить задержку, чтобы время анимации
        }
    };

    const removeSquareHandler = () => {
        if (!loading && squares.length > 0) {
            setLoading(true);
            dispatch(removeSquareAsync());
            setTimeout(() => setLoading(false), 550); // Установить задержку, чтобы время анимации
        }
    };

    return (
        <>
            <div className="buttons">
                <button className="add_square" onClick={addSquareHandler} disabled={loading}>Добавить</button>
                <button className="remove_square" onClick={removeSquareHandler} disabled={loading}>Удалить</button>
            </div>
            <div className="squaresList">
                {squares.map((square, index) => (
                    <div
                        key={index}
                        className={square.className}
                        style={square.style}
                    >{square.content}</div>
                ))}
            </div>
        </>
    );
};

export default App;
