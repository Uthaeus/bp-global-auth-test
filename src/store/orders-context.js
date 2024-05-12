import { createContext, useContext, useState, useEffect } from "react";

import { UserContext } from "./user-context";
import { dummyOrders } from "./dummy/dummy-orders";

export const OrdersContext = createContext({

    orders: [],
    addOrder: () => {},
    updateOrder: () => {},
    deleteOrder: () => {},
});

const OrdersContextProvider = ({ children }) => {

    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user, isAdmin } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            if (isAdmin) {
                setOrders(dummyOrders);
            } else {
                setOrders(dummyOrders.filter(o => +o.uid === +user.id));
            }
        }

        setIsLoading(false);
    }, [user, isAdmin]);

    const addOrder = (data) => {

        setOrders([...orders, data]);
    }

    const updateOrder = (id, data) => {

        setOrders(orders.map(o => o.id === id ? { ...o, ...data } : o));
    }

    const deleteOrder = (id) => {

        setOrders(orders.filter(o => +o.id !== +id));
    }

    const value = {

        orders,
        addOrder,
        updateOrder,
        deleteOrder
    }

    return <OrdersContext.Provider value={value}>{!isLoading && children}</OrdersContext.Provider>
}

export default OrdersContextProvider;