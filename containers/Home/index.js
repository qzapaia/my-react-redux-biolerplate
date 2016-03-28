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
		  <div className={style.root}>
        <HomeContent></HomeContent>
		  </div>
		)
	}
}


export default Home;