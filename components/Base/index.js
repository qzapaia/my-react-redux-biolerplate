import React, { Component } from 'react'
import style from "./styles.less";
import classNames from 'classnames';


export default class Base extends Component {
	constructor(props){
		super(props);

		// initialize state (es6 way)
		this.state={}
	}
	render() {
		let className = classNames(style.root,this.props.className);

		return (
		    <div {...this.props} className={className} >
		    	Base Component - Duplicate this folder in order to create new components
		    </div>
		)
	}
}