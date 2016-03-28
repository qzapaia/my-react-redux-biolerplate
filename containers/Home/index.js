import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router';

import style from "./styles.less";


import HomeContent from '../../components/HomeContent';

class Home extends Component {
	constructor(props) {
        super(props);
  }
	render() {
		return (
		  <div>
        <HomeContent></HomeContent>
		  </div>
		)
	}
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function mapStateToProps(state) {
  return {
    cats: state.catlist,
    isHome:(state.routing.location.pathname == '/')
  }
}

const conectedApp = connect(mapStateToProps)(Home);

export default conectedApp;