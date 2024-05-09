import { Link } from "react-router-dom";

function Admin() {

    return (
        <div className="admin">
            <h1 className="admin-title">Admin</h1>

            <Link to='/admin/users/create' className="btn btn-primary">Create User</Link>
        </div>
    );
}

export default Admin;