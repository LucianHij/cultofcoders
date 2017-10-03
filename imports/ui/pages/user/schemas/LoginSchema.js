import SimpleSchema from 'simpl-schema';

const LoginSchema = new SimpleSchema({
    email: {
        label: "Email Address",
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        uniforms: {
            placeholder: "Please enter your email..."
        }
    },
    password: {
        label: "Password",
        type: String,
        uniforms: {
            type: "password",
            placeholder: "Please enter your password..."
        }
    }
});

export default LoginSchema;
