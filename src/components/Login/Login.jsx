import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field } from 'redux-form'
import { reduxForm } from "redux-form";
import { Input } from "../../component/pleloader/validateComponent/ComponentField";
import { required } from "../../component/pleloader/validateComponent/validate";
import {loginUser} from '../../Redux/authReducer';
import s from '../../component/pleloader/validateComponent/ComponentField.module.css'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error && <div className={s.resultError}>{props.error}</div>}
            <div>
                <Field placeholder="email" name='email' component={Input}
                validate={[required]} />
            </div>
            <div>
                <Field placeholder="password" name='password' component={Input} type='password'
                validate={[required]} />
            </div>
            <div>
                <Field name='rememberMe' component="input" type='checkbox' />
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {

    let onSubmit = (FormData) => {
        props.loginUser(FormData.email, FormData.password, FormData.rememberMe);
    }

    return (
        <div>
            {props.authUser
                ? <Redirect to={'/profile'} /> 
                : <div>
                    <h1>Login</h1>
                    <LoginReduxForm onSubmit={onSubmit} />
                </div>
            }
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        authUser: state.auth.isresultCode
    }
}

export default connect(mapStateToProps, {loginUser} )(Login);