import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        return setPeople(
            people.filter((person) => {
                return person.id !== id;
            })
        );
    };

    const removePeople = () => {
        return setPeople([]);
    };

    return (
        <div>
            {people.map((person) => {
                console.log(person);
                const { id, name } = person;
                return (
                    <div key={id}>
                        <h4> {name} </h4>
                        <button
                            onClick={() => {
                                removePerson(id);
                            }}
                        >
                            Remove
                        </button>
                    </div>
                );
            })}
            <button onClick={removePeople}>Clear List</button>
        </div>
    );
};

export default UseStateArray;
