import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";
import InputField from "../../../../custom-field/InputField";

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
    onSubmit: null,
};

function RegisterForm(props) {
    const { initialValues } = props;
    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required("Email Is Required"),
        password: Yup.string().required("Password Is Required").min(8),
        confirmPassword: Yup.string()
            .required("Confirm Password Is Required")
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
        name: Yup.string().required("Name is Required"),
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
                        <FastField
                            type="password"
                            name="confirmPassword"
                            component={InputField}
                            label="Confirm Password"
                            placeholder="Please Input Confirm Password"
                        />
                        <FastField
                            name="name"
                            component={InputField}
                            label="Name"
                            placeholder="Please Input Name"
                        />
                        <FormGroup className="text-center">
                            <Button type="submit" color="success">
                                {isSubmitting && <Spinner size="sm" />}
                                Submit
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default RegisterForm;
