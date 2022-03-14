import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";
import InputField from "../../../../custom-field/InputField";

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

LoginForm.defaultProps = {
    onsuonSubmitbmit: null,
};

function LoginForm(props) {
    const { initialValues } = props;
    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required("Email is required"),
        password: Yup.string().required("Password is required"),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {(formikProps) => {
                const { values, errors, touched, isSubmitting } = formikProps;
                console.log({ values, errors, touched });
                return (
                    <Form>
                        <FastField
                            name="email"
                            component={InputField}
                            label="Email"
                            placeholder="Please Input Email"
                        />
                        <FastField
                            type="password"
                            name="password"
                            component={InputField}
                            label="Password"
                            placeholder="Please Input Password"
                        />
                        <FormGroup className="text-center">
                            <Button type="submit" color="success">
                                {isSubmitting && <Spinner size="sm" />}
                                Login
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default LoginForm;
