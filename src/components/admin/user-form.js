import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function UserForm({ customer }) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        if (customer) {
            reset(customer);
        }
    }, [customer, reset]);

    const onSubmit = data => {

        console.log(data);

        navigate('/admin');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="user-form w-50">
            <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    autoFocus={true}
                    {...register("name", { required: true })}
                />
                {errors.name && <span className="text-danger">This field is required</span>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    {...register("email", { required: true })}
                />
                {errors.email && <span className="text-danger">This field is required</span>}
            </div>

            <button type="submit" className="btn btn-primary">{ customer ? 'Update' : 'Create'}</button>
        </form>
    );
}

export default UserForm;