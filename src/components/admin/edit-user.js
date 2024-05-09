import { useParams } from "react-router";
import { useState, useEffect } from "react";

import UserForm from "./user-form";

function EditUser() {

    const { id } = useParams();
    const [customer, setCustomer] = useState({});

    useEffect(() => {
        console.log('EditUser');
    })


    return (
        <div className="create-edit-user">
            <h1 className="create-edit-user-title">Edit User</h1>

            <UserForm customer={customer} />
        </div>
    );
}

export default EditUser