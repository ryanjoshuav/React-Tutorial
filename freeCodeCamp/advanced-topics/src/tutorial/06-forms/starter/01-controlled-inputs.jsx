import { useState } from "react";

const ControlledInputs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    // const handleChange = (event) => {
    //     setName(event.target.value);
    //     console.log(name);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email);
    };

    return (
        <form className="form" action="submit" onSubmit={handleSubmit}>
            <h4>Controlled Inputs</h4>
            <div className="form-row">
                <label htmlFor="name" className="form-label">
                    name
                </label>
                <input
                    type="text"
                    id="name"
                    className="form-input"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
            </div>
            <div className="form-row">
                <label htmlFor="email" className="form-label">
                    email
                </label>
                <input
                    type="email"
                    id="email"
                    className="form-input"
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
            </div>
            <button type="submit" className="btn btn-block">
                submit
            </button>
        </form>
    );
};
export default ControlledInputs;
