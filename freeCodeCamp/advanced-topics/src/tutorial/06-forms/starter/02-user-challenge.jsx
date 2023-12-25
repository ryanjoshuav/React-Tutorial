import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
    const [name, setName] = useState("");
    const [people, setPeople] = useState(data);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name) return alert("Please input a name");
        const lastId = people.length;
        const newPerson = { id: lastId + 1, name: name };
        const newPeople = [...people, newPerson];
        console.log(newPeople);
        setPeople(newPeople);
        setName("");
    };

    const removePerson = (id) => {
        setPeople(
            people.filter((person) => {
                return person.id !== id;
            })
        );
    };
    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h4>Add User</h4>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        name
                    </label>
                    <input
                        type="text"
                        className="form-input"
                        id="name"
                        value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </div>

                <button type="submit" className="btn btn-block">
                    submit
                </button>
            </form>
            {people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id}>
                        <h4>{name}</h4>
                        <button
                            className="btn"
                            onClick={() => {
                                removePerson(id);
                            }}
                        >
                            Remove
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
export default UserChallenge;
