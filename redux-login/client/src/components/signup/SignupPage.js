import React, { Component } from 'react'
import { connect } from 'react-redux';
import { userSignupRequest,isUserExists } from '../../actions/signupActions'
import PropTypes from 'prop-types';
import {addFlashMessages} from '../../actions/addFlashMessages'

import SignupForm from './SignupForm';

class SignupPage extends Component {
    static propTypes = {
        userSignupRequest: PropTypes.func.isRequired,
        addFlashMessages:PropTypes.func.isRequired
    }
    render() {
        const {userSignupRequest,addFlashMessages,isUserExists} = this.props
        return (
            <div className='row'>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignupForm 
                        userSignupRequest={userSignupRequest} 
                        addFlashMessages={addFlashMessages}
                        isUserExists={isUserExists}
                    />
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}

export default connect(null, { userSignupRequest,addFlashMessages,isUserExists })(SignupPage)