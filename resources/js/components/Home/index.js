import { useSelector } from "react-redux";
import Guest from "../Guest";
import Menu from "../Common/Menu";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Home() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const history = useHistory();

    useEffect(() => {
        if (userInfo) {
            history.push("/");
        } else {
            history.push("/welcome");
        }
    }, [userInfo]);

    return userInfo ? <Menu /> : <Guest />;
}

export default Home;
