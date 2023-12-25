import { useEffect, useState } from "react";
// const url = ;
const FetchData = () => {
    const [users, setUsers] = useState([]);

    const url = "https://api.github.com/users";
    useEffect(() => {
        //*Using fetch
        //     fetch(url)
        //         .then((resp) => resp.json())
        //         .then((users) => setUsers(users))
        //         .catch((error) => console.log("Error:", error));

        //* Using async
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    console.log(users);
    return (
        <section>
            <h3 className="title">github users</h3>
            <ul className="users">
                {users.map((user) => {
                    const { login, avatar_url, id, html_url } = user;
                    console.log(login);
                    return (
                        <li key={id} className="user">
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h5>{login}</h5>
                                <a href={html_url}>profile</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
export default FetchData;
