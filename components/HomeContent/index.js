import React, { Component } from 'react';
import style from "./styles.less";
import classNames from 'classnames';


class HomeContent extends Component {
	constructor(props){
		super(props);

		this.state = { }
	}
	render() {
		const className = classNames(style.root,this.props.className);

		return (
	    <div {...this.props} className={className} >
	    	HomeContent Component
	    </div>
		)
	}
}

HomeContent.defaultProps = { }

export default HomeContent;