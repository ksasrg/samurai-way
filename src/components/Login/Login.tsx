import { Field } from "redux-form"
import { reduxForm } from "redux-form"
import { Input } from "../FormControls/FormControls";
import { requiredField } from "../../utils/validators";


export const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData);
    }

    return <>
        <h1>Login</h1>
        <LoginResuxForm onSubmit={onSubmit} />
    </>
}

const LoginForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="Login" name='login'
                component={Input} validate={[requiredField]} />
        </div>
        <div>
            <Field placeholder="Password" name='password'
                component={Input} validate={[requiredField]} />
        </div>
        <div>
            <Field type="checkbox" name='remeberMe' component={Input} />Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginResuxForm = reduxForm({
    form: 'login'
})(LoginForm)