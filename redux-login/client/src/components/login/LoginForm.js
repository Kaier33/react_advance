import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import validateInput from '../../utils/validation/login.js';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        }
    }

    static propTypes = {
        login: PropTypes.func.isRequired
    }

    static contextTypes = {  // 引入 context中的router
        router: PropTypes.object
    }

    onChange = (e) => {
        let errors = this.state.errors;
        let keys = e.target.name;
        if (errors.hasOwnProperty(keys)) {
            errors[keys] = ''
        }
        this.setState({
            [keys]: e.target.value,
            errors
        })
    }

    isVaild = () => {
        const { errors, isVaild } = validateInput(this.state)
        if (!isVaild) {
            this.setState({ errors })
        }
        return isVaild;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { identifier, password } = this.state;
        if (this.isVaild()) {
            this.setState({ isLoading: true })
            this.props.login({ identifier: identifier, password: password })
                .then(
                    (res) => {
                        this.setState({ isLoading: false })
                        if (res) {
                            this.context.router.history.push("/new-event")
                        }
                    },
                    (err) => {
                        this.setState({ isLoading: false, errors: err.response.data.errors })
                    }
                )
        }
    }

    render() {
        const { identifier, password, errors, isLoading } = this.state
        return (
            <form onSubmit={this.onSubmit} >
                <h1>Login</h1>
                {errors.form && <div className="alert alert-danger">{errors.form}</div>}
                <div className="form-group">
                    <label className="control-label">Username / Email</label>

                    <input
                        value={identifier}
                        onChange={this.onChange}
                        type="text"
                        name="identifier"
                        className={classnames('form-control', { 'is-invalid': errors.identifier })}
                    />
                    {errors.identifier && <span className='form-text text-muted'>{errors.identifier}</span>}
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>

                    <input
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        name="password"
                        className={classnames('form-control', { 'is-invalid': errors.password })}
                    />
                    {errors.password && <span className='form-text text-muted'>{errors.password}</span>}
                </div>

                <div className="form-group">
                    <button disabled={isLoading} className="btn btn-primary btn-lg">
                        Login
                    </button>
                </div>

            </form>
        )
    }
}

export default LoginForm;