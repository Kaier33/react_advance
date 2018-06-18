import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames'

class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: {},
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            isLoading: false,
        }
    }
    static propTypes = {
        userSignupRequest: PropTypes.func.isRequired
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        this.setState({ errors: {}, isLoading: true })
        this.props.userSignupRequest(this.state).then(
            () => { },
            ({ response }) => { this.setState({ errors: response.data, isLoading: false }) } // ({response})是从data中取得,data是服务器返回的信息
        );
    }
    render() {
        const { errors } = this.state
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <h1> Join our community</h1>

                <div className='form-group'>
                    <label className='control-label'> UserName</label>
                    <input
                        value={this.state.value}
                        onChange={this.onChange.bind(this)}
                        type="text"
                        name='username'
                        className={classnames('form-control', { 'is-invalid': errors.username })}
                        autoComplete='off'
                    />
                    {errors.username && <span className='form-text text-muted'>{errors.username} </span>}
                </div>

                <div className="form-group">
                    <label className="control-label">Email</label>

                    <input
                        value={this.state.email}
                        onChange={this.onChange.bind(this)}
                        type="text" //email
                        name="email"
                        className={classnames('form-control', { 'is-invalid': errors.email })}
                        autoComplete='off'
                    />
                    {errors.email && <span className='form-text text-muted'>{errors.email}</span>}
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>

                    <input
                        value={this.state.password}
                        onChange={this.onChange.bind(this)}
                        type="password"
                        name="password"
                        className={classnames('form-control', { 'is-invalid': errors.password })}
                        autoComplete='off'
                    />
                    {errors.password && <span className='form-text text-muted'>{errors.password}</span>}
                </div>

                <div className="form-group">
                    <label className="control-label">Password Confirmation</label>

                    <input
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange.bind(this)}
                        type="password"
                        name="passwordConfirmation"
                        className={classnames('form-control', { 'is-invalid': errors.passwordConfirmation })}
                        autoComplete='off'
                    />
                    {errors.passwordConfirmation && <span className='form-text text-muted'>{errors.passwordConfirmation}</span>}
                </div>

                <div className='form-group'>
                    <button disabled={this.state.isLoading} type='submit' className='btn btn-primary btn-lg'> Sign up</button>
                </div>
            </form>
        )
    }
}


export default SignupForm