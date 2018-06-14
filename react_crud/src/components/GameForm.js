import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveGame } from '../actions/index';
import { Redirect } from 'react-router-dom';

class GameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            // cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528916436239&di=a81121cbc3c77e5dad9cdfac6cbe7c70&imgtype=0&src=http%3A%2F%2Fwww.arinchina.com%2Fupload%2Fportal%2F201806%2F06%2F180106hwf2pywnon8yzm2h.jpg
            cover: "",
            errors: {},
            loading: false,
            done: false,
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        let errors = {};
        if (this.state.title === "") { errors.title = "can't be empty" };
        if (this.state.cover === "") { errors.cover = "can't be empty" };
        this.setState({ errors }, function () {
            let isVaild = Object.keys(this.state.errors).length === 0;
            let { title, cover } = this.state;
            if (isVaild) {
                this.setState({
                    loading: true
                })
                this.props.saveGame({ title, cover }).then(
                    () => { this.setState({ done: true }) },
                    (err) => {
                        err.response.json()
                            .then(({ errors }) => { this.setState({ errors, loading: false }) })
                    }
                )
            }
        })
    }

    handleChange(e) {
        if (!!this.state.errors[e.target.name]) {
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState({
                [e.target.name]: e.target.value,
                errors
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }
    render() {
        const form = (
            <form className={classnames("ui", "form", { loading: this.state.loading })} onSubmit={this.handleSubmit.bind(this)}>
                <h1>Add new game</h1>

                {!!this.state.errors.global && <div className="ui negative message">{this.state.errors.global}</div>}

                <div className={classnames("field", { error: !!this.state.errors.title })}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        autoComplete='off'
                        onChange={this.handleChange.bind(this)}
                    />
                    <span>{this.state.errors.title}</span>
                </div>

                <div className={classnames("field", { error: !!this.state.errors.cover })}>
                    <label htmlFor="title">Cover Url</label>
                    <input
                        type="text"
                        name="cover"
                        autoComplete='off'
                        value={this.state.cover}
                        onChange={this.handleChange.bind(this)}
                    />
                    <span>{this.state.errors.cover}</span>
                </div>

                <div className="field">
                    {this.state.cover !== '' && <img src={this.state.cover} alt="cover" className="ui small bordered image" />}
                </div>

                <div className="field">
                    <button className="ui primary button">Save</button>
                </div>
            </form>
        )
        return (
            <div>
                {this.state.done ? <Redirect to='/games' /> : form}
            </div>
        )
    }
}
export default connect(null, { saveGame })(GameForm) 