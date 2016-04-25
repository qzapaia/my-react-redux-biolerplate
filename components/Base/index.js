import React, { Component } from 'react';
import style from "./styles.less";
import classNames from 'classnames';


class Base extends Component {
	constructor(props){
		super(props);

		this.state = { }
	}
	render() {
		const className = classNames(style.root,this.props.className);

		return (
	    <div {...this.props} className={className} >
	    	Base Component - Duplicate this folder in order to create new components
	    </div>
		)
	}
}

Base.defaultProps = { }

export default Base;