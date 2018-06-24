import React, { Component } from 'react';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions'

class LoginPage extends Component {
    static propTypes = {
        login: PropTypes.func.isRequired,
    }
    render() {
        const { login } = this.props
        return (
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <LoginForm login={login} />
                </div>
                <div className="col-sm-3"></div>
            </div>
        );
    }
}

export default connect(null, { login })(LoginPage);