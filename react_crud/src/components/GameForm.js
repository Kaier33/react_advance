/*
 * @Author: Kaier_Chou 
 * @Date: 2018-06-17 23:04:40 
 * @Last Modified by:   Kaier_Chou 
 * @Last Modified time: 2018-06-17 23:04:40 
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveGame, fetchGame, updataGame } from '../actions/index';
import { Redirect } from 'react-router-dom';

class GameForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            _id: this.props.game ? this.props.game._id : null,
            title: this.props.game ? this.props.game.title : '',
            cover: this.props.game ? this.props.game.cover : '',
            errors: {},
            loading: false,
            done: false,
            actionTitle: this.props.game ? 'edit Game' : 'Add new Game',
            // cover: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528916436239&di=a81121cbc3c77e5dad9cdfac6cbe7c70&imgtype=0&src=http%3A%2F%2Fwww.arinchina.com%2Fupload%2Fportal%2F201806%2F06%2F180106hwf2pywnon8yzm2h.jpg
        }
    }
    componentDidMount() {
        // router 提供了一些方法
        const { match } = this.props;
        if (match.params._id) {
            this.props.fetchGame(match.params._id);
        }
    }
    // shouldComponentUpdate (nextProps, nextState) {
    //     console.log("更新了")
    // }

    componentWillReceiveProps(nextProps) {
        this.setState({
            _id: nextProps.game._id,
            title: nextProps.game.title,
            cover: nextProps.game.cover
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let errors = {};
        if (this.state.title === "") { errors.title = "can't be empty" };
        if (this.state.cover === "") { errors.cover = "can't be empty" };
        this.setState({ errors }, function () {
            let isVaild = Object.keys(this.state.errors).length === 0;
            if (isVaild) {
                let { _id, title, cover } = this.state;
                this.setState({
                    loading: true
                })
                if (_id) {
                    console.log("updata")
                    this.props.updataGame({ _id, title, cover }).then(
                        () => { this.setState({ done: true }) },
                        (err) => {
                            err.response.json()
                                .then(({ errors }) => { this.setState({ errors, loading: false }) })
                        }
                    )
                } else {
                    console.log("add")
                    this.props.saveGame({ title, cover }).then(
                        () => { this.setState({ done: true }) },
                        (err) => {
                            err.response.json()
                                .then(({ errors }) => { this.setState({ errors, loading: false }) })
                        }
                    )
                }

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
                <h1>{this.state.actionTitle}</h1>

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

const mapStateToProps = (state, props) => {
    const { match } = props;
    if (match.params._id) {
        return {
            game: state.games.find(item => item._id === match.params._id)
        }
    }
    return { game: null }

}

export default connect(mapStateToProps, { saveGame, fetchGame, updataGame })(GameForm) 