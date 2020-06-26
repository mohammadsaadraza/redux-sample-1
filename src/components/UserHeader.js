import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
	render() {
		if (!this.props.user) {
			return <div></div>;
		}
		return <div className="header">Written by: {this.props.user.name}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.users.find((user) => {
			return user.id === ownProps.userId;
		}),
	};
};

export default connect(mapStateToProps)(UserHeader);
