import avatar from "../../../assets/default-avatar.svg";

export function Person({ person }) {
    const imgPath = person?.images?.[0]?.small?.url ?? avatar;
    return (
        <div key={person.id}>
            <img
                src={imgPath}
                alt={person.name}
                style={{
                    width: "50px",
                }}
            />
            <h4>{person.name}</h4>
            <p>Nickname: {person?.nickName ?? "none"}</p>
        </div>
    );
}
