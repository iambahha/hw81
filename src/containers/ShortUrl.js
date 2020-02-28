import React, {Component} from 'react';
import {Button, Form, FormGroup, Input} from "reactstrap";
import {connect} from "react-redux";
import {createShortLink} from "../store/actions";

class ShortUrl extends Component {
	state = {
		originalUrl: ''
	};

	inputChangeHandler = event => {
		this.setState({[event.target.name]: event.target.value});
	};

	submitFormHandler = event => {
		event.preventDefault();

		this.props.createShortLink(this.state);
		this.setState({originalUrl: ''});
	};

	render() {
		const shortLink = 'http://localhost:8000/' + this.props.shortUrl;

		return (
			<>
				<Form onSubmit={this.submitFormHandler}>
					<FormGroup className="text-center m-4">
						<h1 className="m-4">Shorten your link!</h1>
						<Input
							required
							type="text"
							name="originalUrl"
							id="originalUrl"
							placeholder="Enter URL here"
							onChange={this.inputChangeHandler}
							value={this.state.originalUrl}
						/>
						<Button className="m-4">Shorten!</Button>
					</FormGroup>
				</Form>
				<div >
					<h3>Your link now looks like this:</h3>
					<a href={shortLink}>{shortLink}</a>
				</div>
			</>
		);
	}
}

const mapStateToProps = state => ({
	shortUrl: state.shortUrl
});

const mapDispatchToProps = dispatch => ({
	createShortLink: (url) => dispatch(createShortLink(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShortUrl);