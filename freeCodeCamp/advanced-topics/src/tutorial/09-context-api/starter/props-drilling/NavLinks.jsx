import UserContainer from "./UserContainer";

const NavLinks = ({ user, logOut }) => {
    return (
        <div className="nav-container">
            <ul className="nav-links">
                <li>
                    <a href="#">home</a>
                </li>
                <li>
                    <a href="#">about</a>
                </li>
            </ul>
            <UserContainer user={user} logOut={logOut} />
        </div>
    );
};
export default NavLinks;
