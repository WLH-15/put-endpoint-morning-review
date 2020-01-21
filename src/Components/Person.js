import React, { Component } from "react";

class Editing extends Component {
	constructor() {
		super();
		this.state = {
			firstInput: "",
			lastInput: "",
			editing: false
		};
	}

	toggleEdit = () => {
		if (!this.state.editing) {
			this.setState({
				editing: !this.state.editing
			});
		} else {
			// console.log("this.props.personInfo.id", this.props.personInfo.id)
			this.props.editPerson(
				this.props.personInfo.id,
				this.state.firstInput,
				this.state.lastInput
			);
			this.setState({
				firstInput: "",
				lastInput: "",
				editing: false
			});
		}
	};

	handleChange = e => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		// console.log("this.props", this.props)
		// console.log("this.props.personInfo.firstName", this.props.personInfo.firstName)
		// console.log("this.props.personInfo.lastName", this.props.personInfo.lastName)
		if (!this.state.editing) {
			return (
				<div>
					<div>{this.props.personInfo.firstName}</div>
					<div>{this.props.personInfo.lastName}</div>
					<button onClick={this.toggleEdit}>Edit</button>
					<br />
				</div>
			);
		} else {
			return (
				<div>
					<div>
						<input
							name="firstInput"
							value={this.state.firstInput}
							onChange={e => this.handleChange(e)}
							placeholder="First Name"
						/>
					</div>
					<div>
						<input
							name="lastInput"
							value={this.state.lastInput}
							onChange={e => this.handleChange(e)}
							placeholder="Last Name"
						/>
					</div>
					<button onClick={this.toggleEdit}>Save</button>
					<br />
				</div>
			);
		}
	}
}

export default Editing;
