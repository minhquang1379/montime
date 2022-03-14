import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

function Welcome() {
    return (
        <Row className="guest__login text-center pt-2">
            <Col lg="12">
                <button className="button">
                    <Link to={"/login"}>
                        <span>Login</span>
                    </Link>
                </button>
            </Col>
        </Row>
    );
}

export default Welcome;
