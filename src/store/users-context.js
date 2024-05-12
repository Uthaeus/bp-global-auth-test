import { createContext, useState, useEffect, useContext } from "react";

import { UserContext } from "./user-context";
import { dummyUsers } from "./dummy/dummy-users";

export const UsersContext = createContext({

    users: [],
    addUser: () => {},
    updateUser: () => {},
    deleteUser: () => {},
});

const UsersContextProvider = ({ children }) => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { isAdmin } = useContext(UserContext);

    useEffect(() => {
        
        if (isAdmin) {
            setUsers(dummyUsers);
        }

        setIsLoading(false);
    }, []);

    const addUser = (data) => {

        setUsers([...users, data]);
    }

    const updateUser = (id, data) => {

        setUsers(users.map(u => u.id === id ? { ...u, ...data } : u));
    }

    const deleteUser = (id) => {

        setUsers(users.filter(u => +u.id !== +id));
    }

    const value = {

        users,
        addUser,
        updateUser,
        deleteUser
    }

    return <UsersContext.Provider value={value}>{!isLoading && children}</UsersContext.Provider>
}

export default UsersContextProvider;