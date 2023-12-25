import { useState } from "react";

const UserChallenge = () => {
    const [user, setName] = useState(null);

    const buttonClick = () => {
        console.log(user);
        if (!user) {
            setName({ name: "vegan food truck" });
        } else {
            setName(null);
        }
    };

    return (
        <div>
            {user ? <h4>hello there,{user.name} </h4> : <h4>please login</h4>}
            <button className="btn" onClick={buttonClick}>
                {!user ? "login" : "logout"}
            </button>
        </div>
    );
};

export default UserChallenge;
