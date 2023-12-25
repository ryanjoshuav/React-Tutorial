import { useState } from "react";

const UseStateBasics = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>Count : {count}</h2>;
            <button className="btn" type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
};

export default UseStateBasics;
