import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toast";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import { signin } from "../../../actions/userActions";
import MessageBox from "../../Common/MessageBox/MessageBox";
import LoginForm from "./components/LoginForm";

function Login() {
    const initialValues = {
        email: "",
        password: "",
    };

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const { email, password } = values;
        dispatch(signin(email, password));
    };
    useEffect(() => {
        if (userInfo) {
        }
    }, [userInfo]);
    return (
        <>
            <Row className="justify-content-center slide-in-left ">
                <Col lg="5" md="6" sm="12">
                    <Card>
                        <CardBody>
                            <CardTitle
                                className="text-center text-uppercase"
                                tag="h4"
                            >
                                Login
                            </CardTitle>
                            {error && (
                                <MessageBox variant="danger">
                                    {error}
                                </MessageBox>
                            )}
                            <LoginForm
                                initialValues={initialValues}
                                onSubmit={handleSubmit}
                                loading={loading}
                            ></LoginForm>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="guest__login text-center pt-2 slide-in-left">
                <Col lg="12">
                    <button className="button">
                        <Link to={"/register"}>
                            <span>Register</span>
                        </Link>
                    </button>
                </Col>
            </Row>
        </>
    );
}

export default Login;
