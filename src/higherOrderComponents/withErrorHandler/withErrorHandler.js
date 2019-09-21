import React from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends React.Component {
		state = {
			error: null
		}

		componentDidMount() {
			axios.interceptors.request.use((req) => {
				this.clearError();
				return req;
			});

			axios.interceptors.response.use(res => res, (error) => {
				this.setState({ error: error});
			});
		}

		clearError = () => {
			this.setState({ error: null});
		}

		render() {
			return (
				<>
					<Modal
						show={ this.state.error }
						clickHandler={ this.clearError }
					>
						{ this.state.error ? this.state.error.message : null }
					</Modal>
					<WrappedComponent {...this.props} />
				</>
			);
		}
	};
};

export default withErrorHandler;