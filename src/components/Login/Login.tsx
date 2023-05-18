import { Field } from "redux-form"
import { reduxForm } from "redux-form"
import { Input } from "../FormControls/FormControls";
import { requiredField } from "../../utils/validators";
import { connect } from "react-redux";
import { loginTC } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { StoreType } from "../../redux/redux-store";


type LoginPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: any) => {
        console.log(formData.email);
        props.loginTC(formData.email, formData.password, formData.remeberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <>
        <h1>Login</h1>
        <LoginResuxForm onSubmit={onSubmit} />
    </>
}

const LoginForm = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="email" name='email'
                component={Input} validate={[requiredField]} />
        </div>
        <div>
            <Field placeholder="Password" name='password' type="password"
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

const mapStateToProps = (state: StoreType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { loginTC })(Login)