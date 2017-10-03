import SimpleSchema from 'simpl-schema';

const RegisterSchema = new SimpleSchema({
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
    ,
    confirm_password: {
        label: "Confirm password",
        type: String,
        uniforms: {
            type: "password",
            placeholder: "Please enter your password..."
        }
    }
});

export default RegisterSchema;
