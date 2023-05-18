import { Field } from "redux-form"
import { reduxForm } from "redux-form"


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
            <Field placeholder="Login" name='login' component={'input'} />
        </div>
        <div>
            <Field placeholder="Password" name='password' component={'input'} />
        </div>
        <div>
            <Field type="checkbox" name='remeberMe' component={'input'} />Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginResuxForm = reduxForm({
    form: 'login'
})(LoginForm)