import { useReducer, useState } from "react";
import { data } from "../../../data";

const defaultState = {
    people: data,
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CLEAR_LIST":
            return { ...state, people: [] };
        case "RESET_LIST":
            return { ...state, people: data };
        case "REMOVE_ITEM":
            let newPeople = state.people.filter(
                (person) => person.id !== action.id
            );
            return { ...state, people: newPeople };

        default:
            return state;
    }
};

const ReducerBasics = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    // const removeItem = (id) => {
    //     let newPeople = people.filter((person) => person.id !== id);
    //     setPeople(newPeople);
    // };

    return (
        <div>
            {state.people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id} className="item">
                        <h4>{name}</h4>
                        <button
                            onClick={() =>
                                dispatch({ type: "REMOVE_ITEM", id: id })
                            }
                        >
                            remove
                        </button>
                    </div>
                );
            })}
            <button
                className="btn"
                style={{ marginTop: "2rem" }}
                onClick={() =>
                    state.people.length
                        ? dispatch({ type: "CLEAR_LIST" })
                        : dispatch({ type: "RESET_LIST" })
                }
            >
                {state.people.length ? "clear items" : "reset"}
            </button>
        </div>
    );
};

export default ReducerBasics;
