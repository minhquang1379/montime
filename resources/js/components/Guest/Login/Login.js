import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import LoginForm from "./components/LoginForm";

function Login() {
    const initialValues = {
        email: "",
        password: "",
    };

    const handleSubmit = (values) => {
        console.log(values);
    };

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
                            <LoginForm
                                initialValues={initialValues}
                                onSubmit={handleSubmit}
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
