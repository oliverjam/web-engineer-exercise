import React, { Component } from 'react';

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(event) {
        const { type, value } = event.target;
        this.setState({ [type]: value });
    }

    async handleSubmit(event) {
        event.preventDefault();

        const { email, password } = this.state;
        await this.props.authenticate(email, password);

        this.props.redirect('/apps');
    }

    render() {
        return (
            <form id="sign-in" onSubmit={this.handleSubmit}>
                <label htmlFor="email">
                    Email
                    <input
                        id="email"
                        onChange={this.handleChange}
                        type="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        required
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        onChange={this.handleChange}
                        type="password"
                        required
                    />
                </label>
                <input type="submit" />
            </form>
        );
    }
}
