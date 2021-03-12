import { useState, useRef, useEffect } from "react";

const users = [
    {
        name: "John",
        age: 20
    },
    {
        name: "Sarah",
        age: 22
    },
    {
        name: "Micheal",
        age: 22
    }
];

interface User {
    name: string;
    age: number;
}

const UserSearch: React.FunctionComponent = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState("");
    const [foundUser, setFoundUser] = useState<User | undefined>();

    useEffect(() => {
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus();
    }, []);

    const onClick = () => {
        const searchedUser = users.find(user => user.name === name);
        setFoundUser(searchedUser);
    };

    return (
        <div>
            <h3>UserSearch</h3>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Search!</button>
            { foundUser ?
                (<div>
                    <h3>{foundUser.name}</h3>
                    <h3>{foundUser.age}</h3>
                </div>) : (
                    <h3>No User</h3>
                )}
        </div>
    );
};

export default UserSearch;