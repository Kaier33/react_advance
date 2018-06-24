import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage.js';
import {deleteFlashMessage} from '../../actions/addFlashMessages'

class FlashMessageList extends Component {
    static propTypes = {
        messages: PropTypes.array.isRequired
    }
    render() {
        const messageList = this.props.messages  //已由mapStoP引入
        return (
            <div className='container'>
                {messageList.map((message) => {
                  return <FlashMessage 
                    key={message.id} 
                    message={message}
                    deleteFlashMessage={this.props.deleteFlashMessage}
                   />
                })}
            </div>
        )
    }
}
const mapStateToprops = (state) => {   //将state的值连接进来
    return {
        messages: state.flaseMessages
    }
}

export default connect(mapStateToprops, {deleteFlashMessage})(FlashMessageList)