import { useState } from "react";

const UseStateObject = () => {
    const [people, setPeople] = useState({
        name: "peter",
        age: 24,
        hobby: "reading",
    });
    const displayPeople = () => {
        setPeople({
            name: "john",
            age: 28,
            hobby: "sleeping",
        });
    };
    const { name, age, hobby } = people;
    return (
        <>
            <h3> {name} </h3>
            <h3> {age} </h3>
            <h4> Enjoys: {hobby} </h4>
            <button className="btn" onClick={displayPeople}>
                show john
            </button>
        </>
    );
};

export default UseStateObject;
