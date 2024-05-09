import { Link } from "react-router-dom";

function UserDetail() {

    return (
        <div className="user-detail">
            <h1 className="user-detail-title">User Detail</h1>

            <div className="user-detail-actions">
                <Link className="btn btn-primary" to="/admin">Admin Home</Link>
                <Link className="btn btn-success" to="/">Edit User</Link>
                <button className="btn btn-danger">Delete User</button>
            </div>
        </div>
    );
}

export default UserDetail;