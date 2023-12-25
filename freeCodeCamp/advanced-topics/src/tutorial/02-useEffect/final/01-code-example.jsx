import { useState } from "react";

const CodeExample = () => {
    const [value, setValue] = useState(0);
    const sayHi = () => {
        console.log("hi there");
        // be careful
        // setValue(value + 1);
    };
    sayHi();
    return (
        <div>
            <h1>value : {value}</h1>
            <button className="btn" onClick={() => setValue(value + 1)}>
                click me
            </button>
        </div>
    );
};
export default CodeExample;
