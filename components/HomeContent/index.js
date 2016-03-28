import React, { Component } from 'react'
import style from "./styles.less";
import classNames from 'classnames';


export default class HomeContent extends Component {
	render() {
		let className = classNames(style.root,this.props.className);

		return (
		    <div {...this.props} className={className} >
		    	Home content
		    </div>
		)
	}
}