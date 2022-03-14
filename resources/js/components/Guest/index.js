import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Welcome from "./Welcome/Welcome";

function Guest() {
    return (
        <div className="guest">
            <Container className="guest_content">
                <Row>
                    <Col className="text-center" lg="12">
                        <h1 className="text-uppercase neonText">Montime App</h1>
                    </Col>
                </Row>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </BrowserRouter>
            </Container>
        </div>
    );
}

export default Guest;
