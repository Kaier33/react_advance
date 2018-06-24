import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFlashMessages } from '../actions/addFlashMessages'

export default function (ComposedComponent) {
    class Authenticate extends Component {
        componentDidMount() {  //组件加载完毕的时候
            if (!this.props.isAuthenticated) {
                this.props.addFlashMessages({
                    type: 'danger',
                    content: 'You need to login to access this page'
                })
                this.context.router.history.push("/")
            }
        }

        componentWillUpdate(nextProps) { //组件卸载的时候 ,这样退出的时候不会还是这个组件中了
            if (!nextProps.isAuthenticated) {
                this.context.router.history.push('/')
            }
        }

        render() {
            return (
                <div>
                    <ComposedComponent {...this.props} />
                </div>
            )
        }
        static propTypes = {
            addFlashMessages: PropTypes.func.isRequired,
            isAuthenticated: PropTypes.bool.isRequired,
        }

        static contextTypes = {  // 引入 context中的router
            router: PropTypes.object.isRequired
        }
    }


    const mapStateToProps = (state) => {
        return {
            isAuthenticated: state.auth.isAuthenticated
        };
    }


    return connect(mapStateToProps, { addFlashMessages })(Authenticate);
}