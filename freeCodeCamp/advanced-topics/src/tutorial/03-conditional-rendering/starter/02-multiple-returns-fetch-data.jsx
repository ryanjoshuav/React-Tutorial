import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarsons";

const MultipleReturnsFetchData = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setIsLoading(false);
                    setIsError(true);
                }

                const data = await response.json();
                setUser(data);
                console.log(data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>There was an error: check the console for more info</h2>;
    }

    const { login, avatar_url, id, company, bio } = user;
    return (
        <section key={id}>
            <h2>Fetch Data </h2>
            <img src={avatar_url} alt={login} />
            <h2>{login} </h2>
            <h3>Works At {company}</h3>
            <h4>{bio}</h4>
        </section>
    );
};
export default MultipleReturnsFetchData;
