import { createContext, useState, useEffect } from 'react';

import { dummyAdmin, dummyUser } from './dummy/dummy-users';

export const UserContext = createContext({

    user: {},
    setUser: () => {},
    updateUser: () => {},
    logoutUser: () => {},
    deleteUser: () => {},
});

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // create firebase unsubscribe function

        setUser(dummyAdmin);
        setIsAdmin(true);
        setIsLoading(false);
    }, []);

    const updateUser = (data) => {
        // firebase update function

        console.log('update user');

        const u = { ...user, ...data };

        setUser(u);
    }

    const logoutUser = () => {
        // firebase signout function

        setUser(null);
        setIsAdmin(false);

    }

    const deleteUser = () => {
        // firebase delete function
        
        console.log('deleting user');

        setUser(null);
        setIsAdmin(false);
    }

    const value = {

        user,
        setUser,
        updateUser,
        logoutUser,
        deleteUser,
    }

    return (
        <UserContext.Provider value={value}>{!isLoading && children}</UserContext.Provider>
    )
}

export default UserContextProvider;