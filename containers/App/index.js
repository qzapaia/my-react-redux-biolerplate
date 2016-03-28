import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import servicesActions from '../../state/actions/services'
import faqsActions from '../../state/actions/faqs'

import style from "./styles.less";

import Base from '../../components/Base';

class App extends Component {
	constructor(props) {
    super(props);
  }
  componentWillMount(){
  	this.props.servicesActions.fetch();
  	this.props.faqsActions.fetch();
  }
	render() {
		const { dispatch, cats } = this.props

		return (
		  <div>

		    
		    <div className="content">
	        {this.props.children}
	      </div>

	      <Base />
		  </div>
		)
	}
}

function mapStateToProps(state) {
	return {
		isSignup:(state.routing.location.pathname == '/signup')
	}
}

function mapDispatchToProps(dispatch) {
  return {
    servicesActions: bindActionCreators(servicesActions, dispatch),
    faqsActions: bindActionCreators(faqsActions, dispatch)
  };
}


const conectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default conectedApp;