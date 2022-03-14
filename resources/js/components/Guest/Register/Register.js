import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";
import RegisterForm from "./components/RegisterForm";

function Register() {
    const initialValues = {
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
    };

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <>
            {" "}
            <Row className="justify-content-center slide-in-left ">
                <Col lg="5" md="6" sm="12">
                    <Card>
                        <CardBody>
                            <CardTitle
                                className="text-center text-uppercase"
                                tag="h4"
                            >
                                Register
                            </CardTitle>
                            <RegisterForm
                                initialValues={initialValues}
                                onSubmit={handleSubmit}
                            ></RegisterForm>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="guest__login text-center pt-2">
                <Col lg="12">
                    <button className="button">
                        <Link to={"/login"}>
                            <span>Login</span>
                        </Link>
                    </button>
                </Col>
            </Row>
        </>
    );
}

export default Register;
