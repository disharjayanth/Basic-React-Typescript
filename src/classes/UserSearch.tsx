import { Component } from "react";

interface UserSearchProps {
    users: {
        name: string;
        age: number;
    }[];
}

interface UserSearchState {
    name: string;
    user: {
        name: string;
        age: number;
    } | undefined;
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: "",
        user: undefined
    };

    onClick = () => {
        const foundUser = this.props.users.find(user => user.name === this.state.name);
        this.setState({ user: foundUser });
    };

    render() {
        const { name, user } = this.state;
        return (
            <div>
                <h3>UserSearch</h3>
                <input value={name} onChange={(e) => this.setState({ name: e.target.value })} />
                <button onClick={this.onClick}>Search!</button>
                { user ?
                    (<div>
                        <h3>{user.name}</h3>
                        <h3>{user.age}</h3>
                    </div>) : (
                        <h3>No User</h3>
                    )}
            </div>
        );
    }
}

export default UserSearch;