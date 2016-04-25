import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import usersActions from '../../state/actions/users'

import style from "./styles.less";

import Base from '../../components/Base';

class App extends Component {
	constructor(props) {
    super(props);
  }
  componentWillMount(){
  	this.props.usersActions.fetch();
  }
	render() {
		const { dispatch, cats } = this.props

		return (
		  <div className={style.root}>

		    <div>
	        {this.props.children}
	      </div>

	      <Base />
		  </div>
		)
	}
}

function mapStateToProps(state) {
	return {
		users:state.users
	}
}

function mapDispatchToProps(dispatch) {
  return {
    usersActions: bindActionCreators(usersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);