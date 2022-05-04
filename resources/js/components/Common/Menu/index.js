import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../../../actions/userActions";

function Menu() {
    const dispatch = useDispatch();

    function signoutHandler() {
        dispatch(signout());
    }

    return (
        <>
            Menu nè
            <Link to="#signout" onClick={signoutHandler}>
                Signout
            </Link>
        </>
    );
}

export default Menu;
