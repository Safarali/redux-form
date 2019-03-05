export const validate = values => {
    const errors = {};

    if(!values.userName) {
        errors.userName = "Username is missing"
    };

    if(!values.password) {
        errors.password = "Password is missing"
    };

    return errors;
}