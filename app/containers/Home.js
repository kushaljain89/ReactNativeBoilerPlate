import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Home from '@screen/Home';

export const mapStateToProps = (state) => {
	return {
		abc: 'abc',
	};
};

export const mapDispatchToProps = (dispatch) => {
	return {
		testFunction: () => {
			console.log('hello');
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
