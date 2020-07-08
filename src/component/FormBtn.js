import React, { Component } from 'react'
import "../asset/styles/loginPages.less"

export default class FormBtn extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            this.props.type === "button" ?
                < button type={this.props.type} class="styled-button" onClick={this.props.onclick} > <span class="styled-button__real-text-holder"> <span class="styled-button__real-text">Submit</span> <span class="styled-button__moving-block face"> <span class="styled-button__text-holder"> <span class="styled-button__text">{this.props.name}</span> </span> </span><span class="styled-button__moving-block back"> <span class="styled-button__text-holder"> <span class="styled-button__text">Submit</span> </span> </span> </span> </button> :
                <span class="register"><a href="#">{this.props.name}</a></span>


        )
    }
}
