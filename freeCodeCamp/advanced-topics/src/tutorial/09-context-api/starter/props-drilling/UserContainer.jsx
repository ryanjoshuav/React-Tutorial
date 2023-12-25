const UserContainer = ({ user, logOut }) => {
    return (
        <div className="user-container">
            <p>
                {user
                    ? `Hello There, ${user?.name?.toUpperCase()}`
                    : "Please Login"}
            </p>
            <button type="button" className="btn" onClick={logOut}>
                {user?.name ? "logout" : "login"}
            </button>
        </div>
    );
};
export default UserContainer;
