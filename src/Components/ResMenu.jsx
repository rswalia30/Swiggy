import { useParams } from "react-router-dom";

const ResMenu = () => {
    const { resid } = useParams();

    return (
        <>
            <h1>This is Res Menu</h1>
            <h2>Res ID = {resid}</h2>
        </>
    )
}

export default ResMenu;