import { useParams } from "react-router-dom";

const User = () => {
    const { userid } = useParams();

    return (
        <div className="container">
            <h1 className="text-center">This is User Component</h1>
            <hr />
            <h2>User ID = {userid}</h2>
        </div>
    )
}

export default User;