import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class FlashMessage extends Component {
    static propTypes = {
        message: PropTypes.object.isRequired,
        deleteFlashMessage:PropTypes.func.isRequired,
    }
    handleDelete(){
        console.log("点击删除")
        console.log(this.props.deleteFlashMessage)
        this.props.deleteFlashMessage(this.props.message.id)
    }
    render() {
        const { content, type } = this.props.message
        console.log('message')
        console.log(this.props.message)
        return (
            <div className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'danger'
            })}>
                <button className="close" onClick={this.handleDelete.bind(this)}><span>&times;</span></button>
                {content}

            </div>
        )
    }
}

export default FlashMessage