import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    // padding: 50
}

const modalStyle = {
    backgroundColor: "#fff",
    borderRadius: 5,
    border: "1px solid #eee",
    maxWidth: 500,
    minHeight: 300,
    maring: '0 auto',
    padding: 30,
    position: 'relative',
    top: '20%',
    left: '40%',
    zIndex: 10,
}

const footerStyle = {
    position: "absolute",
    bottom: 20
}

// index.html下面的modal跟节点
const modalRoot = document.getElementById('modal-root')

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }

    keyUp = (e) => {
        if (e.which === 27 && this.props.show) {
            this.props.onClose()
        }
    }

    closeSelf = (e) => {
        if (e.target.classList.contains('cover')) {
            e.stopPropagation();
            this.props.onClose()
        }
    }

    componentDidMount() {
        document.addEventListener('keyup', this.keyUp)
        modalRoot.appendChild(this.el)
    }

    componentWillMount() {
        console.log(123)
        document.removeEventListener('keyup', this.keyUp)
    }

    render() {
        if (!this.props.show) { return null }
        const modalUI = (
            <div style={backdropStyle} onClick={(e) => { this.closeSelf(e) }} className='cover'>
                <div style={modalStyle}>
                    {this.props.children}
                    <div style={footerStyle}>
                        <button onClick={(e) => this.props.onClose()}> Close </button>
                    </div>
                </div>
            </div>
        )
        return ReactDOM.createPortal(modalUI, this.el)
    }
}
