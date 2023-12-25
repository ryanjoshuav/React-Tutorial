import { useState } from "react";

const ToggleChallenge = () => {
    const [value, setValue] = useState(true);

    const changeValue = () => {
        setValue(!value);
    };

    return (
        <h2>
            <button className="btn" onClick={changeValue}>
                {value ? "edit" : "add"}
            </button>
            {!value && <Message />}
        </h2>
    );
};

const Message = () => {
    return <div className="alert alert-danger">Hello World!</div>;
};

export default ToggleChallenge;
